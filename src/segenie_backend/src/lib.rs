use candid::Nat;
use creators::Creator;
use ic_cdk::export::Principal;
use ic_cdk_macros::*;
use portals::{Portal, PortalId};

#[update]
fn create_portal_blueprint(
    name: String,
    description: String,
    transferable: bool,
    limit: Option<Nat>,
    image_url: Option<String>,
) -> String {
    let creator = ic_cdk::api::caller();
    portals::do_create_portal_blueprint(creator, name, description, transferable, limit, image_url);

    format!("Portal created successfully.")
}

#[update]
fn update_portal_metadata(
    id: PortalId,
    name: String,
    description: String,
    image_url: Option<String>,
) -> String {
    let caller = ic_cdk::api::caller();

    match portals::do_update_metadata(caller, id, name, description, image_url) {
        Ok(_) => format!("Metadata updated successfully."),
        Err(e) => format!("Error while updating metadata: {:?}", e),
    }
}

/// Get a specific portal with the provided `PortalId`.
#[ic_cdk_macros::query]
fn get_portal(id: PortalId) -> Option<Portal> {
    portals::do_get_portal(id)
}

#[update]
fn set_creator_metadata(name: String) -> String {
    let caller = ic_cdk::api::caller();
    creators::do_set_creator_metadata(caller, name);

    format!("Creator metadata set successfully.")
}

#[ic_cdk_macros::query]
fn get_creator_metadata() -> Option<Creator> {
    let caller = ic_cdk::api::caller();
    creators::do_get_creator_metadata(caller)
}

#[ic_cdk_macros::query]
fn get_portals_of_creator(creator: Principal) -> Vec<Portal> {
    portals::do_get_portals_of_creator(creator)
}

#[ic_cdk_macros::query]
fn get_portals_of_caller() -> Vec<Portal> {
    let caller = ic_cdk::api::caller();
    portals::do_get_portals_of_creator(caller)
}

#[update]
fn mint_portal(portal: PortalId, receiver: Principal) -> String {
    let caller = ic_cdk::api::caller();
    match portals::do_mint_portal(caller, receiver, portal) {
        Ok(_) => format!("Portal minted successfully."),
        Err(e) => format!("Error while minting portal: {:?}", e),
    }
}

#[update]
fn transfer_portal(portal: PortalId, receiver: Principal) -> String {
    let caller = ic_cdk::api::caller();
    match portals::do_transfer_portal(caller, receiver, portal) {
        Ok(_) => format!("Portal transfered successfully."),
        Err(e) => format!("Error while transfering the portal: {:?}", e),
    }
}

#[ic_cdk_macros::query]
fn get_portals_of_user(user: Principal) -> Vec<Portal> {
    portals::do_get_portals_of_user(user)
}
