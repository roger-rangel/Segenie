mod badges;

use badges::{Badge, BadgeId};
use ic_cdk_macros::*;

#[update]
fn create_badge(name: String, description: String, image_url: Option<String>) -> String {
    let creator = ic_cdk::api::caller();
    badges::do_create_badge(creator, name, description, image_url);

    format!("Badge created successfully.")
}

#[update]
fn update_badge_metadata(
    id: BadgeId,
    name: String,
    description: String,
    image_url: Option<String>,
) -> String {
    match badges::do_update_metadata(id, name, description, image_url) {
        Ok(_) => format!("Metadata updated successfully."),
        Err(e) => format!("Error while updating metadata: {:?}", e),
    }
}

/// Get a specific badge with the provided `BadgeId`.
#[ic_cdk_macros::query]
fn get_badge(id: BadgeId) -> Badge {
    match badges::do_get_badge(id) {
        Some(b) => b,
        None => badges::get_dummy_badge(),
    }
}
