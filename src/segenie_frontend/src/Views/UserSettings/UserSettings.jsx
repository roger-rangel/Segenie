/* eslint-disable no-unused-vars */
import React from 'react'
import Nav from './nav/Nav'
import About from './about/About'
import NFTs from './components/nfts/NFTs'
import Info from './components/info/Info'
import Contact from './components/contact/Contact'
import Rewards from './components/rewards/Rewards'
import Portals from './portals/Portals'
import Communities from './components/communities/Communities'

import './UserSettings.module.scss'

//start adding transfer functionality UI

const UserSettings = () => {
  return (
    <>
        <Nav />
        <About />
        <Portals />
        {/* <Communities />
        <NFTs />
        <Rewards />
        <Info />
        <Contact /> */}
    </>
  )
}

export default UserSettings