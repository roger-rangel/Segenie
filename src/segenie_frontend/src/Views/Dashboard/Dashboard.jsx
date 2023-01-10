import React, { useState } from 'react';
import Menu from "./components/Menu";
import UserMenu from "./components/UserMenu";
import MintModal from "./components/MintModal";
import MintPortal from "./components/MintPortal";
import Container from "./components/Container";
import RequireWeb3Auth from '../Web3Authorization/RequireWeb3Auth/RequireWeb3Auth';

const Dashboard = () => {
  const [modal, setModal] = useState(false);
  const [portal, setPortal] = useState(false);
  console.log(modal);
  return (
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
  );
}

export default Dashboard;