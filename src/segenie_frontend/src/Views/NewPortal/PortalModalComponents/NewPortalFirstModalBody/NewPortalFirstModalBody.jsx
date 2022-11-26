import React from 'react';
import Heading from '../Heading/Heading';
import PropTypes from 'prop-types';

const BadgeCreationFirstModalBody = ({ imageDataURL, setImageDataURL }) => {
  const benefits = [
    'Free Minting',
    'Choose between Tradeable or Soulbound NFTs',
    'Authenticate your accomplishments in Web3',
    'Create communities around digital assets',
    'Determine the value of your digital assets',
    'Offer royalties for sale/usage',
  ];

  return (
    <div className="flex items-center gap-8">
      <div className="flex-1">
        <div className="text-left max-w-[300px] mr-auto">
          <Heading type="secondary">Benefits</Heading>
          <ul className="text-[#e6e6e6] list-disc pl-4">
            {benefits.map((benefit, index) => (
              <li className="font-raleway text-base leading-normal" key={index}>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

BadgeCreationFirstModalBody.propTypes = {
  imageDataURL: PropTypes.string,
  setImageDataURL: PropTypes.func.isRequired,
};

export default BadgeCreationFirstModalBody;
