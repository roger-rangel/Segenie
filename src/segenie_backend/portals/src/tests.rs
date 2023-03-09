use super::*;

#[test]
fn creating_portal_works() {
    let creator = get_creator();
    let portal_name = String::from("portal1");
    let portal_desc = String::from("A basic portal.");
    let transferable = false;
    let limit = None;
    let image_url = None;

    do_create_portal_blueprint(
        creator,
        portal_name.clone(),
        portal_desc.clone(),
        transferable.clone(),
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
            transferable,
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
    let transferable = false;
    let image_url = None;
    let limit = None;

    do_create_portal_blueprint(
        creator,
        portal_name.clone(),
        portal_desc.clone(),
        transferable.clone(),
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
            transferable: transferable.clone(),
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
            transferable,
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
    let transferable = false;
    let image_url = None;
    let limit = None;

    do_create_portal_blueprint(
        creator,
        portal_name.clone(),
        portal_desc.clone(),
        transferable.clone(),
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
            transferable,
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
    let transferable = false;

    let portal = create_portal_blueprint(creator, name.clone(), transferable);

    assert_eq!(
        do_get_portals_of_creator(creator),
        vec![Portal {
            id: Nat::from(0),
            creator,
            name,
            description: portal.description,
            transferable,
            image_url: portal.image_url,
            limit: portal.limit,
            minted: portal.minted,
        }]
    );
}

#[test]
fn minting_portals_works() {
    let creator = get_creator();

    let mut portal1 = create_portal_blueprint(creator, format!("Portal1"), false);
    let mut portal2 = create_portal_blueprint(creator, format!("Portal2"), false);

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
    let transferable = false;
    let image_url = None;
    let limit: Option<Nat> = Some(Nat::from(2));

    let _ = do_create_portal_blueprint(creator, name, description, transferable, limit, image_url);

    let alice = get_default_principal();

    // Note that in theory we wouldn't mint multiple portals for the same user.
    // We may support this kind of functionality in the future though.
    assert_eq!(do_mint_portal(creator, alice, Nat::from(0)), Ok(()));
    assert_eq!(do_mint_portal(creator, alice, Nat::from(0)), Ok(()));
    assert_eq!(
        do_mint_portal(creator, alice, Nat::from(0)),
        Err(Error::LimitReached)
    );
}

fn create_portal_blueprint(creator: Principal, name: String, transferable: bool) -> Portal {
    let description = format!("Description of: {}", name);
    let image_url = None;
    let limit: Option<Nat> = None;

    let id = do_create_portal_blueprint(
        creator,
        name.clone(),
        description.clone(),
        transferable.clone(),
        limit.clone(),
        image_url.clone(),
    );

    Portal {
        id,
        creator,
        name,
        description,
        transferable,
        image_url,
        limit,
        minted: Nat::from(0),
    }
}

fn get_creator() -> Principal {
    Principal::from_text("arlij-g2zpo-epfot-36ufg-vm4gj-3j4tj-rsjjt-fsv2m-sp4z7-nnk6b-lqe").unwrap()
}

fn get_default_principal() -> Principal {
    Principal::from_text("2vxsx-fae").unwrap()
}
