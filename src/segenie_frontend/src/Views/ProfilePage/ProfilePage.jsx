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

import './ProfilePage.module.scss'

//start adding transfer functionality UI

const ProfilePage = () => {
  const [transferNFT, setTransferNFT] = useState(false);

  return (
    <>
        <Nav />
        <About />
        <Portals setTransferNFT={setTransferNFT} />
        <TransferNFT transferNFT={transferNFT} setTransferNFT={setTransferNFT}/>
        {/* <Communities />
        <NFTs />
        <Rewards />
        <Info />
        <Contact /> */}
    </>
  )
}

export default ProfilePage