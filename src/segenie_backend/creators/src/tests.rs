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
    Principal::from_text("arlij-g2zpo-epfot-36ufg-vm4gj-3j4tj-rsjjt-fsv2m-sp4z7-nnk6b-lqe")
        .unwrap()
}
