use ic_cdk::export::Principal;
use std::{
    cell::{Cell, RefCell},
    collections::BTreeMap,
};

/// The type used to represent an Badges id.
type BadgeId = u64;

/// Stores all the necessary information about a badge.
pub struct Badge {
    /// A unique identifier for the badge.
    id: BadgeId,
    /// A name for the badge.
    name: String,
    /// A description for the badge.
    description: String,
    /// The creator of the badge.
    creator: Principal,
}

/// Maps `BadgeId` to the specific Badge.
type BadgeStore = BTreeMap<BadgeId, Badge>;

thread_local! {
    static BADGES: RefCell<BadgeStore> = RefCell::default();
    static BADGE_COUNT: Cell<u64> = Cell::default();
}

pub fn do_create_badge(creator: Principal, name: String, description: String) {}
