import React from 'react';
import { useNavigate } from "react-router-dom";
import './WelcomePage.scss'

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
        <div className="">
            <h1 className={` pt-6 text-[#e6e6e6] text-3xl font-bold flex justify-center font-raleway`}>Welcome to Segenie</h1>
              <div className="flex pt-10 space-x-20">
                <div className="flex flex-col ">  
                  <div class="card">
                    Are you ready?
                  </div>
                  <a className="mt-8 text-[#e6e6e6] flex justify-center font-raleway cursor-pointer" 
                    onClick={portal}>Create a New Portal</a>
                </div>
                <div className="flex flex-col ">  
                  <div class="card_metaverse">
                    Coming Soon
                  </div>
                  <a className="mt-8 text-[#e6e6e6] flex justify-center font-raleway cursor-pointer" 
                    onClick={options}>Explore the Metaverse</a>
                </div>
              </div>
        </div>
    </>
  );
};

export default WelcomePage;