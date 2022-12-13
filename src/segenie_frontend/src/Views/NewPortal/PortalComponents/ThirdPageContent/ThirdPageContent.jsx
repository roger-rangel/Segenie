import React from 'react';
import PropTypes from 'prop-types';
import Title from '../../../../components/Title/Title';
import Description from '../Description/Description';
import MintedPortal, { portalPropTypes } from '../MintedPortal/MintedPortal';

const ThirdPageContent = ({ mintResult }) => {
  return (
    <div className="mx-32 flex justify-between">
      <div className=" min-w-[150px] max-w-[300px]">
        <MintedPortal mintResult={mintResult} />
      </div>
      <div>
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
      </div>
    </div>
  );
};

ThirdPageContent.propTypes = {
  mintResult: PropTypes.exact(portalPropTypes).isRequired,
};

export default ThirdPageContent;
