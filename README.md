# Segenie

The repository of the Segenie project. 

### Getting started
```
dfx start --background
```
Deploy the canisters:
```
dfx deploy
```
Copy the `canisterId` of the backend canister.
Paste it inside the `useNewPortal.jsx` hook:
```js
const useNewPortal = () => {
  const canisterId = "paste the canisterId here";
  const actor = createActor(canisterId);
```
To launch the webapp run:
```
npm start
```