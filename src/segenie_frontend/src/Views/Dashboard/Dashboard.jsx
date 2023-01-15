/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Menu from "./components/Menu";
import UserMenu from "./components/UserMenu";
import MintModal from "./components/MintModal";
import MintPortal from "./components/MintPortal";
import Container from "./components/Container";
import MobileMenu from "./components/MobileMenu";
import RequireWeb3Auth from '../Web3Authorization/RequireWeb3Auth/RequireWeb3Auth';

const Dashboard = () => {
  const [modal, setModal] = useState(false);
  const [portal, setPortal] = useState(false);
  console.log(modal);
  return (
    <div>
      <div className="text-[white] bg-gradient-to-r from-[#fc00ff] via-[#2ebf91] to-[#4BC0C8] z-15 mx-auto text-center py-2"> 
        <a href="/documentation" className="">
          Read our quick documentation to learn more about Segenie. New updates coming soon! 
        </a> 
      </div>
      <MobileMenu />
    <div className="w-full h-screen bg-[#121026] flex overflow-hidden scrollbar-hide max-[525px]:overflow-x-hidden max-[525px]:overflow-y-scroll"> 
      <Menu setModal={setModal} setPortal={setPortal}/>
      {/* <RequireWeb3Auth> */}
        <MintModal modal={modal} setModal={setModal} />
      {/* </RequireWeb3Auth> */}
      {/* <RequireWeb3Auth> */}
        <MintPortal portal={portal} setPortal={setPortal} />
      {/* </RequireWeb3Auth> */}
      <Container />
      <UserMenu />
    </div>
    </div>
  );
}

export default Dashboard;