/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Nav from './nav/Nav'
import About from './about/About'
import NFTs from './components/nfts/NFTs'
import Info from './components/info/Info'
import Contact from './components/contact/Contact'
import Rewards from './components/rewards/Rewards'
import TransferNFT from '../Dashboard/components/TransferNFT'
import Portals from './portals/Portals'
import Communities from './components/communities/Communities'
import {useLocation} from 'react-router-dom';

import './ProfilePage.module.scss'
import RequireWeb3Auth from '../Web3Authorization/RequireWeb3Auth/RequireWeb3Auth'

//start adding transfer functionality UI

const ProfilePage = () => {
  const [transferPortal, setTransferPortal] = useState(false);
  const [portal, setPortal] = useState(0);
  const [imageUrl, setImageUrl] = useState("");

  const location = useLocation();

  console.log(location);

  const setSelectedPortal = (portalId, imageUrl) => {
    setTransferPortal(transferPortal => !transferPortal);
    setPortal(portalId);
    setImageUrl(imageUrl);
  }

  return (
    <>
        <Nav />
        <About />
        <Portals setSelectedPortal={setSelectedPortal} />
        {/* The location.state.provider is not the whole provider object */}
        {/* <TransferNFT provider={location.state.provider} transferPortal={transferPortal} setTransferPortal={setTransferPortal} portalId={portal}/> */}
        <TransferNFT transferPortal={transferPortal} setTransferPortal={setTransferPortal} portalId={portal} imageUrl={imageUrl}/> 
        {/* <Communities />
        <NFTs />
        <Rewards />
        <Info />
        <Contact /> */}
    </>
  )
}

export default ProfilePage