use candid::types::number::Nat;
use ic_cdk::export::{candid::CandidType, Principal};
use std::{cell::RefCell, collections::BTreeMap};

/// Errors related for badge logic.
#[derive(PartialEq, Debug)]
pub enum Error {
    /// The badge with provided `BadgeId` doesn't exist.
    BadgeNotFound,
}

/// The type used to represent an Badges id.
pub type BadgeId = Nat;

/// Stores all the necessary information about a badge.
#[derive(Clone, CandidType, PartialEq, Debug)]
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

pub fn do_update_metadata(id: BadgeId, name: String, description: String) -> Result<(), Error> {
    BADGES.with(|badges| {
        let mut badges = badges.borrow_mut();
        if let Some(badge) = badges.clone().get(&id) {
            badges.insert(
                id.clone(),
                Badge {
                    id,
                    name,
                    description,
                    creator: badge.creator,
                },
            );
            Ok(())
        } else {
            Err(Error::BadgeNotFound)
        }
    })
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

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn creating_badge_works() {
        let creator = get_creator();
        let badge_name = String::from("badge1");
        let badge_desc = String::from("A basic badge.");

        do_create_badge(creator, badge_name.clone(), badge_desc.clone());

        assert_eq!(
            do_get_badge(Nat::from(0)),
            Some(Badge {
                id: Nat::from(0),
                creator,
                name: badge_name,
                description: badge_desc,
            })
        );
    }

    #[test]
    fn updating_badge_metadata_works() {
        let creator = get_creator();
        let badge_name = String::from("badge1");
        let badge_desc = String::from("A basic badge.");

        do_create_badge(creator, badge_name.clone(), badge_desc.clone());

        assert_eq!(
            do_get_badge(Nat::from(0)),
            Some(Badge {
                id: Nat::from(0),
                creator,
                name: badge_name,
                description: badge_desc,
            })
        );

        let new_name = String::from("New name");
        let new_desc = String::from("New description");
        assert_eq!(
            do_update_metadata(Nat::from(0), new_name.clone(), new_desc.clone()),
            Ok(())
        );

        assert_eq!(
            do_get_badge(Nat::from(0)),
            Some(Badge {
                id: Nat::from(0),
                creator,
                name: new_name,
                description: new_desc,
            })
        );
    }

    #[test]
    fn updating_badge_metadata_fails_for_non_existing_badge() {
        let new_name = String::from("New name");
        let new_desc = String::from("New description");
        assert_eq!(
            do_update_metadata(Nat::from(0), new_name.clone(), new_desc.clone()),
            Err(Error::BadgeNotFound)
        );
    }

    #[test]
    fn get_badge_works_when_badge_doesnt_exist() {
        assert_eq!(do_get_badge(Nat::from(0)), None);
    }

    fn get_creator() -> Principal {
        Principal::from_text("arlij-g2zpo-epfot-36ufg-vm4gj-3j4tj-rsjjt-fsv2m-sp4z7-nnk6b-lqe")
            .unwrap()
    }
}
