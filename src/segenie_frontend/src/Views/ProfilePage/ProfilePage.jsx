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

//start adding transfer functionality UI

const ProfilePage = () => {
  const [transferPortal, setTransferPortal] = useState(false);
  const [portal, setPortal] = useState(0);

  const location = useLocation();

  console.log(location);

  const setSelectedPortal = (portalId) => {
    setTransferPortal(transferPortal => !transferPortal);
    setPortal(portalId);
  }

  return (
    <>
        <Nav />
        <About />
        <Portals setSelectedPortal={setSelectedPortal} />
        <TransferNFT provider={location.state.provider} transferPortal={transferPortal} setTransferPortal={setTransferPortal} portalId={portal}/>
        {/* <Communities />
        <NFTs />
        <Rewards />
        <Info />
        <Contact /> */}
    </>
  )
}

export default ProfilePage