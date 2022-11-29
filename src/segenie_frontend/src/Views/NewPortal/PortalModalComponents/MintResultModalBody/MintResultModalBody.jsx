import React from 'react';
import PropTypes from 'prop-types';
import MintResultCard, {
  mintResultPropTypes,
} from '../MintResultCard/MintResultCard';
import Heading from '../Heading/Heading';
import Description from '../Description/Description';
import Facebook from '../../../../../assets/img/facebook.png';
import { TwitterIcon } from '../../../../../assets/icons/twitter-icon.svg';
import { InstagramIcon } from '../../../../../assets/icons/instagram-icon.svg';

const MintResultModalBody = ({ mintResult }) => {
  const shareOptions = [
    {
      Icon: Facebook,
      linkURL: 'https://facebook.com',
    },
    {
      Icon: InstagramIcon,
      linkURL: 'https://instagram.com',
    },
    {
      Icon: TwitterIcon,
      linkURL: 'https://twitter.com',
    },
  ];

  return (
    <div className="mx-32 flex justify-between">
      <div className=" min-w-[150px] max-w-[300px]">
        <MintResultCard mintResult={mintResult} />
      </div>
      <div>
        <Heading type="tertiary">What's next?</Heading>
        <Description className="mb-1">
          Show it to the world.
        </Description>
        <div className="flex items-center justify-between mx-4">
          <div className="flex flex-col items-center mt-10 ">
            <img src="./img/facebook.png" alt="" className="h-12 w-12 mb-6"/>
            <img src="./img/instagram.png" alt="" className="h-12 w-12"/>
          </div>
          <div className="flex flex-col items-center mt-10 ">
            <img src="./img/twitter.png" alt="" className="h-12 w-12 mb-6"/>
            <img src="./img/dscvr.png" alt="" className="h-12 w-12"/>
          </div>
        </div>
      </div> 
    </div>
  );
};

MintResultModalBody.propTypes = {
  mintResult: PropTypes.exact(mintResultPropTypes).isRequired
};

export default MintResultModalBody;
