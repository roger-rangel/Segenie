mod badges;

use ic_cdk_macros::*;

#[update]
fn create_badge(name: String, description: String) -> String {
    let creator = ic_cdk::api::caller();
    badges::do_create_badge(creator, name, description);

    format!("Badge created successfully.")
}
