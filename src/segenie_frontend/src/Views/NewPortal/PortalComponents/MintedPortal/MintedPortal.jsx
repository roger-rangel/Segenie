import React from 'react';
import PropTypes from 'prop-types';
import AspectRatio from '../AspectRatio/AspectRatio';
import Title from '../../../../components/Title/Title';
import Description from '../Description/Description';

const MintedPortal = ({ mintResult }) => {
  console.log(`THIS IS MINTRESULT ${mintResult}`);
  return (
    <article className="flex flex-col bg-[#111022] rounded-[1.5rem] overflow-hidden -mt-4 -mb-4">
      <AspectRatio ratio="fourByThree">
        <img
          className="container h-full object-cover"
          src="./img/portal.png"
          alt=""
        />
      </AspectRatio>
      <div className="p-4 h-[23rem] bg-contain w-60">
        <Title type="secondary">{mintResult.name}</Title>
        <img
          src="./img/portal.png"
          alt=""
          className="rounded mb-4 bg-contain "
        />
        <Description className="max-h-[150px] overflow-auto">
          {mintResult.description}
        </Description>
      </div>
    </article>
  );
};

export const portalPropTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

MintedPortal.propTypes = {
  mintResult: PropTypes.exact(portalPropTypes),
};

export default MintedPortal;
