import Menu from "./Components/Menu";
import React from 'react';
// import Container from "./Components/Container";

const Dashboard = () => {
  return (
    <div className="w-full h-screen bg-[#121026] flex overflow-hidden scrollbar-hide max-[525px]:overflow-x-hidden max-[525px]:overflow-y-scroll">
      <Menu />
      {/* <Container /> */}
    </div>
  );
}

export default Dashboard;