import React from 'react';
import PropTypes from 'prop-types';
import MintResultCard, {
  mintResultPropTypes,
} from '../MintResultCard/MintResultCard';
import Heading from '../Heading/Heading';
import Description from '../Description/Description';
import { FacebookIcon } from '../../../../../assets/icons/facebook-icon.svg';
import { TwitterIcon } from '../../../../../assets/icons/twitter-icon.svg';
import { InstagramIcon } from '../../../../../assets/icons/instagram-icon.svg';

const MintResultModalBody = ({ mintResult }) => {
  const shareOptions = [
    {
      Icon: FacebookIcon,
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
    <div className="mx-auto flex justify-center">
      <div className=" min-w-[150px] max-w-[300px]">
        <MintResultCard mintResult={mintResult} />
      </div>
      <Heading type="tertiary">What's next?</Heading>
      <Description className="mb-1">
        Show it to the world.
      </Description>
    </div>
  );
};

MintResultModalBody.propTypes = {
  mintResult: PropTypes.exact(mintResultPropTypes).isRequired
};

export default MintResultModalBody;
