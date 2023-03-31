
# Segenie ✨

Segenie is a platform deployed to the IC that enables users and developers to create their collections(called portal blueprints) and mint nfts(portals).

The segenie project implements a feature called token gating which makes this project different from others. Our goal is to make a platform that developers can easily use and integrate to their application. This will give the developers the possibility to utilize the token gating feature we have built which is very developer friendly and easy to use out of the box.

### 📄 Segenie documentation
A basic Segenie documentation can be found [here](https://o37ht-fyaaa-aaaap-qavsa-cai.ic0.app/documentation), but also feel free to reach out to any of the contributors of this project.
> Keep in mind that the documentation may happen to be outdated since we are constantly adding new features and improving the project.

### 🚧 Developer package
The developer package we have built for token gating can already be used, but we are looking to officially deploy it to NPM once the Segenie platform is production ready.
We are still documenting the package, but for the curious ones the code can be viewed [here](https://github.com/Szegoo/Segenie-js).

## 🧑‍💻 Running Segenie Locally

To run Segenie locally you will have to follow the following instructions.

### Prerequisets
Before following the instructions we recommend following [this](https://internetcomputer.org/docs/current/developer-docs/setup/deploy-locally) documentation to set up all the prerequisets.
Since the backend is written in rust make sure you have all of the necessities that are described [here](https://internetcomputer.org/docs/current/developer-docs/backend/rust/rust-quickstart)

### Getting started
Install all the npm packages.
```
npm i
```
Start dfx locally.
```
dfx start --background
```
Deploy the canisters:
```
dfx deploy
```
To launch the webapp withot deploying the canister run:
```
npm start
```
