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

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn creating_portal_works() {
        let creator = get_creator();
        let portal_name = String::from("portal1");
        let portal_desc = String::from("A basic portal.");
        let limit = None;
        let image_url = None;

        do_create_portal_blueprint(
            creator,
            portal_name.clone(),
            portal_desc.clone(),
            limit.clone(),
            image_url.clone(),
        );

        assert_eq!(
            do_get_portal(Nat::from(0)),
            Some(Portal {
                id: Nat::from(0),
                creator,
                name: portal_name,
                description: portal_desc,
                image_url,
                limit,
                minted: Nat::from(0),
            })
        );
    }

    #[test]
    fn updating_portal_metadata_works() {
        let creator = get_creator();
        let portal_name = String::from("portal1");
        let portal_desc = String::from("A basic portal.");
        let image_url = None;
        let limit = None;

        do_create_portal_blueprint(
            creator,
            portal_name.clone(),
            portal_desc.clone(),
            limit.clone(),
            image_url.clone(),
        );

        assert_eq!(
            do_get_portal(Nat::from(0)),
            Some(Portal {
                id: Nat::from(0),
                creator: creator.clone(),
                name: portal_name,
                description: portal_desc,
                image_url,
                limit: limit.clone(),
                minted: Nat::from(0),
            })
        );

        let new_name = String::from("New name");
        let new_desc = String::from("New description");
        let new_image_url = Some(String::from("https://domain.com/image.jpg"));
        assert_eq!(
            do_update_metadata(
                creator,
                Nat::from(0),
                new_name.clone(),
                new_desc.clone(),
                new_image_url.clone()
            ),
            Ok(())
        );

        assert_eq!(
            do_get_portal(Nat::from(0)),
            Some(Portal {
                id: Nat::from(0),
                creator,
                name: new_name,
                description: new_desc,
                image_url: new_image_url,
                limit,
                minted: Nat::from(0),
            })
        );
    }

    #[test]
    fn updating_portal_metadata_fails_for_non_existing_portal() {
        let creator = get_creator();
        let new_name = String::from("New name");
        let new_desc = String::from("New description");
        let new_image_url = Some(String::from("https::/domain.com/image.jpg"));

        assert_eq!(
            do_update_metadata(
                creator,
                Nat::from(0),
                new_name.clone(),
                new_desc.clone(),
                new_image_url
            ),
            Err(Error::PortalNotFound)
        );
    }

    #[test]
    fn updating_portal_metadata_fails_when_not_called_by_creator() {
        let creator = get_creator();
        let portal_name = String::from("portal1");
        let portal_desc = String::from("A basic portal.");
        let image_url = None;
        let limit = None;

        do_create_portal_blueprint(
            creator,
            portal_name.clone(),
            portal_desc.clone(),
            limit.clone(),
            image_url.clone(),
        );

        assert_eq!(
            do_get_portal(Nat::from(0)),
            Some(Portal {
                id: Nat::from(0),
                creator: creator.clone(),
                name: portal_name,
                description: portal_desc,
                image_url,
                limit,
                minted: Nat::from(0),
            })
        );

        let new_name = String::from("New name");
        let new_desc = String::from("New description");
        let new_image_url = Some(String::from("https://domain.com/image.jpg"));
        assert_eq!(
            do_update_metadata(
                // the default principal is not allowed to make this call.
                get_default_principal(),
                Nat::from(0),
                new_name.clone(),
                new_desc.clone(),
                new_image_url.clone()
            ),
            Err(Error::NotAllowed)
        );
    }

    #[test]
    fn get_portal_works_when_portal_doesnt_exist() {
        assert_eq!(do_get_portal(Nat::from(0)), None);
    }

    #[test]
    fn get_creator_portals_works() {
        let creator = get_creator();
        let name = String::from("portal1");
        let description = String::from("A basic portal.");
        let image_url = None;
        let limit: Option<Nat> = None;

        do_create_portal_blueprint(
            creator,
            name.clone(),
            description.clone(),
            limit.clone(),
            image_url.clone(),
        );

        assert_eq!(
            do_get_portals_of_creator(creator),
            vec![Portal {
                id: Nat::from(0),
                creator,
                name,
                description,
                image_url,
                limit,
                minted: Nat::from(0),
            }]
        );
    }

    #[test]
    fn minting_portals_works() {
        let creator = get_creator();

        let mut portal1 = create_portal_blueprint(creator, format!("Portal1"));
        let mut portal2 = create_portal_blueprint(creator, format!("Portal2"));

        let alice = get_default_principal();

        assert_eq!(do_mint_portal(creator, alice, portal1.clone().id), Ok(()));
        assert_eq!(do_mint_portal(creator, alice, portal2.clone().id), Ok(()));

        portal1.minted = Nat::from(1);
        portal2.minted = Nat::from(1);

        assert_eq!(do_get_portals_of_user(alice), vec![portal1, portal2])
    }

    #[test]
    fn minting_limit_works() {
        let creator = get_creator();
        let name = String::from("portal");
        let description = String::from("A basic portal.");
        let image_url = None;
        let limit: Option<Nat> = Some(Nat::from(2));

        let _ = do_create_portal_blueprint(
            creator,
            name.clone(),
            description.clone(),
            limit.clone(),
            image_url.clone(),
        );

        let alice = get_default_principal();

        // Note that in theory we wouldn't mint multiple portals for the same user.
        // We may support this kind of functionality in the future though.
        assert_eq!(do_mint_portal(creator, alice, Nat::from(0)), Ok(()));
        assert_eq!(do_mint_portal(creator, alice, Nat::from(0)), Ok(()));
        assert_eq!(do_mint_portal(creator, alice, Nat::from(0)), Err(Error::LimitReached));
    }

    fn create_portal_blueprint(creator: Principal, name: String) -> Portal {
        let description = format!("Description of: {}", name);
        let image_url = None;
        let limit: Option<Nat> = None;

        let id = do_create_portal_blueprint(
            creator,
            name.clone(),
            description.clone(),
            limit.clone(),
            image_url.clone(),
        );

        Portal {
            id,
            creator,
            name,
            description,
            image_url,
            limit,
            minted: Nat::from(0),
        }
    }

    fn get_creator() -> Principal {
        Principal::from_text("arlij-g2zpo-epfot-36ufg-vm4gj-3j4tj-rsjjt-fsv2m-sp4z7-nnk6b-lqe")
            .unwrap()
    }

    fn get_default_principal() -> Principal {
        Principal::from_text("2vxsx-fae").unwrap()
    }
}
