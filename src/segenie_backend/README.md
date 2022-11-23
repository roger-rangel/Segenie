### How to create a portal?
```
dfx canister call segenie_backend create_portal '("name", "description")'
```

### How get a portal?
```
dfx canister call segenie_backend get_portal '(0)'
```

### How to update metadata?
```
dfx canister call segenie_backend update_portal_metadata '(0, "new name", "new desc", null)'
```
Or
```
dfx canister call segenie_backend update_portal_metadata '(0, "new name", "new desc", opt "https://domain.com/image.jpg")'
```
To set the `image_url` for the portal.

### How to set the creator metadata?
```
dfx canister call segenie_backend set_creator_metadata '("Creator#1")'
```

### How to get the creator metadata?
```
dfx canister call segenie_backend get_creator_metadata '("arlij-g2zpo-epfot-36ufg-vm4gj-3j4tj-rsjjt-fsv2m-sp4z7-nnk6b-lqe")'
```
*Note*: The principal has to be replaced with the creator's principal. 