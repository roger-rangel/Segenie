use candid::types::number::Nat;
use ic_cdk::export::{candid::CandidType, Principal};
use std::{cell::RefCell, collections::BTreeMap};

/// The type used to represent an Badges id.
pub type BadgeId = Nat;

/// Stores all the necessary information about a badge.
#[derive(Clone, CandidType)]
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
    static BADGE_COUNT: RefCell<BadgeId> = RefCell::new(Nat::from(0));
}

/// Creates a new badge and increases the `BADGE_COUNT`.
pub fn do_create_badge(creator: Principal, name: String, description: String) {
    BADGE_COUNT.with(|count| {
        let id = (count.borrow()).clone();
        let badge = Badge {
            id: id.clone(),
            name,
            description,
            creator,
        };

        BADGES.with(|badges| {
            let mut badges = badges.borrow_mut();
            badges.insert(id, badge);
        })
    });

    BADGE_COUNT.with(|counter| *counter.borrow_mut() += 1);
}

pub fn do_get_badge(id: BadgeId) -> Option<Badge> {
    BADGES.with(|badges| {
        if let Some(badge) = badges.borrow().get(&id) {
            Some(badge.clone())
        } else {
            None
        }
    })
}
