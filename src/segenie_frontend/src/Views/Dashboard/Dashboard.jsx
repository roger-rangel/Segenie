import React, { useState } from 'react';
import Menu from "./components/Menu";
import UserMenu from "./components/UserMenu";
import MintModal from "./components/MintModal";
import Container from "./components/Container";

const Dashboard = () => {
  const [modal, setModal] = useState(true);
  console.log(modal);
  return (
    <div className="w-full h-screen bg-[#121026] flex overflow-hidden scrollbar-hide max-[525px]:overflow-x-hidden max-[525px]:overflow-y-scroll">
      <Menu setModal={setModal} />
      <MintModal modal={modal} setModal={setModal} />
      <Container />
      <UserMenu />
    </div>
  );
}

export default Dashboard;