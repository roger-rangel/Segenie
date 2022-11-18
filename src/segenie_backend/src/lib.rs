mod creators;
mod portals;

use ic_cdk_macros::*;
use portals::{Portal, PortalId};

#[update]
fn create_portal(name: String, description: String, image_url: Option<String>) -> String {
    let creator = ic_cdk::api::caller();
    portals::do_create_portal(creator, name, description, image_url);

    format!("Portal created successfully.")
}

#[update]
fn update_portal_metadata(
    id: PortalId,
    name: String,
    description: String,
    image_url: Option<String>,
) -> String {
    match portals::do_update_metadata(id, name, description, image_url) {
        Ok(_) => format!("Metadata updated successfully."),
        Err(e) => format!("Error while updating metadata: {:?}", e),
    }
}

/// Get a specific portal with the provided `PortalId`.
#[ic_cdk_macros::query]
fn get_portal(id: PortalId) -> Portal {
    match portals::do_get_portal(id) {
        Some(b) => b,
        None => portals::get_dummy_portal(),
    }
}

#[update]
fn set_creator_metadata(name: String) -> String {
    let caller = ic_cdk::api::caller();
    creators::do_set_creator_metadata(caller, name);

    format!("Creator metadata set successfully.")
}
