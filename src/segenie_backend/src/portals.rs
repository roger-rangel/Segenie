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
pub fn do_create_portal(
    creator: Principal,
    name: String,
    description: String,
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
    portal: PortalId,
) -> Result<(), Error> {
    let maybe_portal = do_get_portal(portal.clone());
    if let Some(portal) = maybe_portal {
        if portal.creator != caller {
            return Err(Error::NotAllowed);
        }
    } else {
        return Err(Error::PortalNotFound);
    }

    PORTALS_OF.with(|portals_of| {
        let mut portals_of = portals_of.borrow_mut();
        if let Some(portals) = portals_of.get_mut(&receiver) {
            (*portals).push(portal);
        } else {
            portals_of.insert(receiver, vec![portal]);
        }
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
        let image_url = None;

        do_create_portal(
            creator,
            portal_name.clone(),
            portal_desc.clone(),
            image_url.clone(),
        );

        assert_eq!(
            do_get_portal(Nat::from(0)),
            Some(Portal {
                id: Nat::from(0),
                creator,
                name: portal_name,
                image_url,
                description: portal_desc,
            })
        );
    }

    #[test]
    fn updating_portal_metadata_works() {
        let creator = get_creator();
        let portal_name = String::from("portal1");
        let portal_desc = String::from("A basic portal.");
        let image_url = None;

        do_create_portal(
            creator,
            portal_name.clone(),
            portal_desc.clone(),
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
                image_url: new_image_url,
                description: new_desc,
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

        do_create_portal(
            creator,
            portal_name.clone(),
            portal_desc.clone(),
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

        do_create_portal(
            creator,
            name.clone(),
            description.clone(),
            image_url.clone(),
        );

        assert_eq!(
            do_get_portals_of_creator(creator),
            vec![Portal {
                id: Nat::from(0),
                creator,
                name,
                image_url,
                description,
            }]
        );
    }

    #[test]
    fn minting_portals_works() {
        let creator = get_creator();

        let portal1 = create_portal(creator, format!("Portal1"));
        let portal2 = create_portal(creator, format!("Portal2"));

        let alice = get_default_principal();

        assert_eq!(do_mint_portal(creator, alice, portal1.clone().id), Ok(()));
        assert_eq!(do_mint_portal(creator, alice, portal2.clone().id), Ok(()));

        assert_eq!(do_get_portals_of_user(alice), vec![portal1, portal2])
    }

    fn create_portal(creator: Principal, name: String) -> Portal {
        let description = format!("Description of: {}", name);
        let image_url = None;

        let id = do_create_portal(
            creator,
            name.clone(),
            description.clone(),
            image_url.clone(),
        );

        Portal {
            id,
            creator,
            name,
            description,
            image_url,
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
