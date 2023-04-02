<div align="center">
    <img src="https://github.com/roger-rangel/Segenie/blob/main/src/segenie_frontend/assets/Screenshot%202023-04-02%20at%205.07.53%20PM.png" alt="Segenie Logo">
    <h1>Segenie ✨</h1>
    <strong>Web3 tools 🌿</strong>
    <strong>AI-powered NFT Creator Platform: NFTs as magic keys for AI-generated projects</strong>
</div>
<br>
<div align="center">
    <a href="[https://github.com/lensterxyz/lenster/blob/main/LICENSE](https://github.com/roger-rangel/Segenie/blob/main/LICENSE.md)">
        <img src="" alt="License">
    </a>
</div>
<div align="center">
    <br>
    <a href="https://segenie.xyz"><b>segenie.xyz »</b></a>
    <br><br>
    <a href="https://twitter.com/segeniexyz"><b>Twitter</b></a>
    •
    <a href="https://github.com/roger-rangel/segenie/issues/new"><b>Issues</b></a>
</div>

## About Segenie 👥

Segenie is a platform deployed to the [Internet Computer](https://internetcomputer.org/).

Our startup provides a platform that allows users to create their own NFTs, which gives them exclusive access to premium content. We leverage AI-powered algorithms to generate unique designs for each NFT, making them more desirable for collectors!


The segenie project implements a feature called token gating which makes this project different from others. Our goal is to make a platform that developers can easily use and integrate to their application. This will give the developers the possibility to utilize the token gating feature we have built which is very developer friendly and easy to use out of the box.

### 📄 Segenie documentation
A basic Segenie documentation can be found [here](https://o37ht-fyaaa-aaaap-qavsa-cai.ic0.app/documentation), but also feel free to reach out to any of the contributors of this project.
> Keep in mind that the documentation may happen to be outdated since we are constantly adding new features and improving the project.

### 🚧 Developer package
The developer package we have built for token gating can already be used, but we are looking to officially deploy it to NPM once the Segenie platform is production ready.
We are still documenting the package, but for the curious ones the code can be viewed [here](https://github.com/Szegoo/Segenie-js).

## 🗝️ NFTs as magic keys

![](https://github.com/roger-rangel/Segenie/blob/main/src/segenie_frontend/assets/nft3_segenie.png)  |  ![](https://github.com/roger-rangel/Segenie/blob/main/src/segenie_frontend/assets/nft6_segenie.png)
:-------------------------:|:-------------------------:
![](https://github.com/roger-rangel/Segenie/blob/main/src/segenie_frontend/assets/nft2_segenie.png)  |  ![](https://github.com/roger-rangel/Segenie/blob/main/src/segenie_frontend/assets/segenienfr.png)

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
