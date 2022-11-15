### How to create a badge?
```
dfx canister call segenie_backend create_badge '("name", "description")'
```

### How get a badge?
```
dfx canister call segenie_backend get_badge '(0)'
```

### How to update metadata?
```
dfx canister call segenie_backend update_badge_metadata '(0, "new name", "new desc", null)'
```
Or
```
dfx canister call segenie_backend update_badge_metadata '(0, "new name", "new desc", opt "https://domain.com/image.jpg")'
```
To set the `image_url` for the badge.