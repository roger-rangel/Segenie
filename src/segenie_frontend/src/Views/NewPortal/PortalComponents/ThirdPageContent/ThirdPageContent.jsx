import React from 'react';
import PropTypes from 'prop-types';
import Title from '../../../../components/Title/Title';
import Description from '../Description/Description';
import MintedPortal, { portalPropTypes } from '../MintedPortal/MintedPortal';

const ThirdPageContent = ({ mintResult }) => {
  return (
    <div className="mx-20 flex justify-between">
      <div className=" min-w-[150px] max-w-[300px]">
        <MintedPortal mintResult={mintResult} />
      </div>
      <div className=" min-w-[150px] max-w-[300px] flex flex-col bg-[#111022] rounded-[1.5rem] overflow-hidden -mt-4 -mb-4 px-8 pt-6">
        <Title type="tertiary">What's next?</Title>
        <Description className="mb-1">Show it to the world.</Description>
        <div className="flex items-center justify-between mx-4">
          <div className="flex flex-col items-center mt-10 ">
            <img src="./img/facebook.png" alt="" className="h-12 w-12 mb-6" />
            <img src="./img/instagram.png" alt="" className="h-12 w-12" />
          </div>
          <div className="flex flex-col items-center mt-10 ">
            <img src="./img/twitter.png" alt="" className="h-12 w-12 mb-6" />
            <img src="./img/dscvr.png" alt="" className="h-12 w-12" />
          </div>
        </div>
        <div className="text-base font-sans relative rounded-full bg-[#ff006e] py-1 px-2 text-center text-[white] mt-4">You are in Demo Mode</div>

        <div className="text-base font-sans relative rounded-full bg-[#3a0ca3] py-1 px-2 text-center text-[white] mt-4">Updates coming soon!</div>
      </div>
    </div>
  );
};

ThirdPageContent.propTypes = {
  mintResult: PropTypes.exact(portalPropTypes).isRequired,
};

export default ThirdPageContent;
