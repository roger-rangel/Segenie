import React from 'react';
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const navigate = useNavigate();
    const portal = () => {
        navigate("/portal");
    }

    const options = () => {
      navigate("/options");
  }
  return (
    <>
        <div className={`bg-[#00040F] min-h-screen`}>
            <h1 className={` pt-20 text-[#e6e6e6] text-3xl font-bold flex justify-center font-raleway`}>Welcome to Segenie</h1>
            <a className="mt-8 text-[#e6e6e6] flex justify-center font-raleway cursor-pointer" onClick={portal}>Mint Portal</a>
            <a className="mt-8 text-[#e6e6e6] flex justify-center font-raleway cursor-pointer" onClick={options}>All Options</a>
        </div>
    </>
  );
};

export default WelcomePage;