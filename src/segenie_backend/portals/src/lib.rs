#[cfg(test)]
mod tests;

use candid::types::number::Nat;
use ic_cdk::export::{candid::CandidType, Principal};
use std::{cell::RefCell, collections::BTreeMap};

/// Errors related for portal logic.
#[derive(PartialEq, Debug)]
pub enum Error {
    /// The portal with provided `PortalId` doesn't exist.
    PortalNotFound,
    /// The caller is not allowed to do the specific activity.
    NotAllowed,
    /// The minting limit has been reached.
    LimitReached,
    /// Tried to do something with a portal that is not owned by the caller.
    NotOwned,
}

/// The type used to represent an Portals id.
pub type PortalId = Nat;

/// Stores all the necessary information about a portal.
#[derive(Clone, CandidType, PartialEq, Debug)]
pub struct Portal {
    /// A unique identifier for the portal.
    id: PortalId,
    /// A name for the portal.
    name: String,
    /// A description for the portal.
    description: String,
    /// Specifies whether the portal is transferable or not.
    transferable: bool,
    /// The url of the image for the portal.
    image_url: Option<String>,
    /// The limit of how many portal instances can be minted.
    limit: Option<Nat>,
    /// The number of portals minted.
    minted: Nat,
    /// The creator of the portal.
    creator: Principal,
}

/// Maps `PortalId` to the specific Portal.
type PortalStore = BTreeMap<PortalId, Portal>;
/// Maps the creators to their portals.
type CreatorPortalsStore = BTreeMap<Principal, Vec<PortalId>>;
/// Maps users to their owned instances of portals.
type PortalsOfStore = BTreeMap<Principal, Vec<PortalId>>;

thread_local! {
    static PORTALS: RefCell<PortalStore> = RefCell::default();
    static CREATOR_PORTALS: RefCell<CreatorPortalsStore> = RefCell::default();
    static PORTAL_COUNT: RefCell<PortalId> = RefCell::new(Nat::from(0));
    static PORTALS_OF: RefCell<PortalsOfStore> = RefCell::default();
}

/// Creates a new portal and increases the `PORTAL_COUNT`.
pub fn do_create_portal_blueprint(
    creator: Principal,
    name: String,
    description: String,
    transferable: bool,
    limit: Option<Nat>,
    image_url: Option<String>,
) -> PortalId {
    let mut id = Nat::from(0);
    PORTAL_COUNT.with(|count| {
        id = (count.borrow()).clone();
        let portal = Portal {
            id: id.clone(),
            name,
            description,
            transferable,
            image_url,
            limit,
            minted: Nat::from(0),
            creator,
        };

        PORTALS.with(|portals| {
            let mut portals = portals.borrow_mut();
            portals.insert(id.clone(), portal);
        })
    });

    CREATOR_PORTALS.with(|portals_by_creator| {
        let mut creator_portals = portals_by_creator.borrow_mut();
        if let Some(portals) = creator_portals.get_mut(&creator) {
            (*portals).push(id.clone());
        } else {
            creator_portals.insert(creator, vec![id.clone()]);
        }
    });

    PORTAL_COUNT.with(|counter| *counter.borrow_mut() += 1);
    id
}

/// Updates the metadata of the given portal.
///
/// This call is only allowed for the creator of the specified portal.
pub fn do_update_metadata(
    caller: Principal,
    id: PortalId,
    name: String,
    description: String,
    image_url: Option<String>,
) -> Result<(), Error> {
    let maybe_portal = do_get_portal(id.clone());
    if let Some(portal) = maybe_portal {
        if portal.creator != caller {
            return Err(Error::NotAllowed);
        }
    } else {
        return Err(Error::PortalNotFound);
    }

    PORTALS.with(|portals| {
        let mut portals = portals.borrow_mut();
        if let Some(portal) = portals.clone().get(&id) {
            portals.insert(
                id.clone(),
                Portal {
                    id,
                    name,
                    description,
                    image_url,
                    transferable: portal.clone().transferable,
                    limit: portal.clone().limit,
                    minted: portal.clone().minted,
                    creator: portal.creator,
                },
            );
            Ok(())
        } else {
            Err(Error::PortalNotFound)
        }
    })
}

/// Returns the portal with the specified `PortalId`.
/// In case there is no such portal returns `None`.
pub fn do_get_portal(id: PortalId) -> Option<Portal> {
    PORTALS.with(|portals| {
        if let Some(portal) = portals.borrow().get(&id) {
            Some(portal.clone())
        } else {
            None
        }
    })
}

/// Get all the portals that were created by the specified creator.
pub fn do_get_portals_of_creator(creator: Principal) -> Vec<Portal> {
    let mut portal_ids: Vec<PortalId> = vec![];

    CREATOR_PORTALS.with(|portals_by_creator| {
        if let Some(portals) = portals_by_creator.borrow().get(&creator) {
            portal_ids = portals.clone();
        }
    });

    let mut portals = vec![];
    for id in portal_ids {
        if let Some(portal) = do_get_portal(id) {
            portals.push(portal);
        }
    }
    portals
}

/// Mints a new instance of a created portal
///
/// This call is only allowed for the creator of the specified portal.
pub fn do_mint_portal(
    caller: Principal,
    receiver: Principal,
    portal_id: PortalId,
) -> Result<(), Error> {
    let maybe_portal = do_get_portal(portal_id.clone());
    if let Some(portal) = maybe_portal.clone() {
        if portal.creator != caller {
            return Err(Error::NotAllowed);
        }
        if portal.limit.is_some() && portal.minted >= portal.limit.unwrap() {
            return Err(Error::LimitReached);
        }
    } else {
        return Err(Error::PortalNotFound);
    }

    PORTALS_OF.with(|portals_of| {
        let mut portals_of = portals_of.borrow_mut();
        if let Some(portals) = portals_of.get_mut(&receiver) {
            (*portals).push(portal_id.clone());
        } else {
            portals_of.insert(receiver, vec![portal_id.clone()]);
        }
    });

    let mut portal = maybe_portal.unwrap();
    portal.minted += 1;

    PORTALS.with(|portals| {
        let mut portals = portals.borrow_mut();
        portals.insert(portal_id, portal);
    });

    Ok(())
}

pub fn do_get_portals_of_user(user: Principal) -> Vec<Portal> {
    let mut portal_ids: Vec<PortalId> = vec![];

    PORTALS_OF.with(|portals_of| {
        if let Some(portals) = portals_of.borrow().get(&user) {
            portal_ids = portals.clone();
        }
    });

    let mut portals = vec![];
    for id in portal_ids {
        if let Some(portal) = do_get_portal(id) {
            portals.push(portal);
        }
    }
    portals
}

pub fn do_transfer_portal(
    caller: Principal,
    receiver: Principal,
    portal_id: PortalId,
) -> Result<(), Error> {
    PORTALS_OF.with(|portals_of| -> Result<(), Error> {
        let mut portals_of = portals_of.borrow_mut();
        if let Some(portals) = portals_of.get_mut(&caller) {
            let maybe_index = (*portals).iter().position(|p| *p == portal_id);

            match maybe_index {
                Some(index) => (*portals).remove(index),
                None => return Err(Error::NotOwned),
            };
        } else {
            return Err(Error::NotOwned);
        }

        if let Some(portals) = portals_of.get_mut(&receiver) {
            (*portals).push(portal_id.clone());
        } else {
            portals_of.insert(receiver, vec![portal_id.clone()]);
        }

        Ok(())
    })
}
