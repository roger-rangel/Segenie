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