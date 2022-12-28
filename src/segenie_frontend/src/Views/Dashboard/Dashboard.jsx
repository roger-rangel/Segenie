import React from 'react';
import Menu from "./components/Menu";
import UserMenu from "./components/UserMenu";
import Container from "./components/Container";

const Dashboard = () => {
  return (
    <div className="w-full h-screen bg-[#121026] flex overflow-hidden scrollbar-hide max-[525px]:overflow-x-hidden max-[525px]:overflow-y-scroll">
      <Menu />
      <Container />
      <UserMenu />
    </div>
  );
}

export default Dashboard;