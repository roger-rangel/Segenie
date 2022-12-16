/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const navigate = useNavigate();
  const portal = () => {
    navigate('/portal');
  };

  const options = () => {
    navigate('/options');
  };
  return (
    <>
      <main className="welcome">
        <h1
          className={`pb-6 text-[#e6e6e6] text-3xl font-bold flex justify-center font-raleway`}
        >
          Welcome to Segenie
        </h1>
        <div className="flex pt-10 space-x-20">
          <div className="flex flex-col ">
            <div className="card" onClick={portal}>
              <video
                autoPlay
                loop="loop"
                muted
                src="./videos/train.mp4"
                alt="train"
                className="gif"
              ></video>
            </div>
            <a
              className="mt-8 text-[#e6e6e6] flex justify-center font-raleway cursor-pointer"
              onClick={portal}
            >
              Create a New Portal
            </a>
          </div>

          <div className="flex flex-col ">
            <div className="card_metaverse">
              <video
                autoPlay
                loop="loop"
                muted
                src="./videos/cyberpunk.mp4"
                alt="cyberpunk"
                className="gif"
              ></video>
            </div>
            <a
              className="mt-8 text-[#e6e6e6] flex justify-center font-raleway cursor-pointer"
              onClick={options}
            >
              Explore the Metaverse
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default WelcomePage;
