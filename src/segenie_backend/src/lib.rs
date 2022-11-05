mod badges;

use badges::{Badge, BadgeId};
use ic_cdk_macros::*;

#[update]
fn create_badge(name: String, description: String) -> String {
    let creator = ic_cdk::api::caller();
    badges::do_create_badge(creator, name, description);

    format!("Badge created successfully.")
}

/// Get a specific badge with the provided `BadgeId`.
#[ic_cdk_macros::query]
fn get_badge(id: BadgeId) -> Option<Badge> {
    badges::do_get_badge(id)
}
