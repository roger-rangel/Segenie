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

/// Sets the metadata for the specific creator.
pub fn do_set_creator_metadata(principal: Principal, name: String) {
    CREATORS.with(|creators| {
        let creator = Creator { principal, name };

        let mut creators = creators.borrow_mut();
        creators.insert(principal, creator);
    })
}

pub fn do_get_creator_metadata() {
    
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn setting_creator_metadata_works() {

    }
}
