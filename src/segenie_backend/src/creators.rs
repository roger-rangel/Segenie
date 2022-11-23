use ic_cdk::export::{candid::CandidType, Principal};
use std::{cell::RefCell, collections::BTreeMap};

/// Stores metadata about a portal creator.
#[derive(Clone, CandidType, PartialEq, Debug)]
pub struct Creator {
    /// The principal-id of the creator.
    principal: Principal,
    /// The display name of the creator.
    name: String,
}

/// Maps `Principal` to the specific Creator.
type CreatorStore = BTreeMap<Principal, Creator>;

thread_local! {
    static CREATORS: RefCell<CreatorStore> = RefCell::default();
}

fn get_dummy_principal() -> Principal {
    // this should never panic.
    Principal::from_text("arlij-g2zpo-epfot-36ufg-vm4gj-3j4tj-rsjjt-fsv2m-sp4z7-nnk6b-lqe").unwrap()
}

pub fn get_dummy_metadata() -> Creator {
    Creator {
        principal: get_dummy_principal(),
        name: String::from("NOT SET"),
    }
}

/// Sets the metadata for the specific creator.
pub fn do_set_creator_metadata(principal: Principal, name: String) {
    CREATORS.with(|creators| {
        let creator = Creator { principal, name };

        let mut creators = creators.borrow_mut();
        creators.insert(principal, creator);
    })
}

pub fn do_get_creator_metadata(principal: Principal) -> Option<Creator> {
    CREATORS.with(|creators| {
        if let Some(creator) = creators.borrow().get(&principal) {
            Some(creator.clone())
        } else {
            None
        }
    })
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn setting_creator_metadata_works() {
        let creator = get_creator();
        let name = String::from("Creator#1");

        do_set_creator_metadata(creator, name.clone());

        assert_eq!(
            do_get_creator_metadata(creator),
            Some(Creator {
                principal: creator,
                name,
            })
        );
    }

    #[test]
    fn getting_creator_metadata_returns_none() {
        let creator = get_creator();
        assert_eq!(do_get_creator_metadata(creator), None);
    }

    fn get_creator() -> Principal {
        get_dummy_principal()
    }
}
