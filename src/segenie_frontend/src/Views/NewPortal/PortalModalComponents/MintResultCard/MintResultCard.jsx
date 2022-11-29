import React from 'react';
import PropTypes from 'prop-types';
import AspectRatio from '../AspectRatio/AspectRatio';
import Heading from '../Heading/Heading';
import Chip from '../Chip/Chip';
import Description from '../Description/Description';

const MintResultCard = ({ mintResult }) => {
  console.log(`THIS IS MINTRESULT ${mintResult}`)
  return (
    <article className="flex flex-col bg-[#18162c] rounded-[1.5rem] overflow-hidden">
      <AspectRatio ratio="fourByThree">
        <img className="container h-full object-cover" src='./gifs/ball.gif' alt="" />
      </AspectRatio>
      <div className="p-4 h-80 bg-contain w-60">
        <Heading type="secondary">{mintResult.name}</Heading>
        <img src="./gifs/minted_portal.gif" alt="" className="rounded mb-4 bg-contain " />
        <Description className="max-h-[150px] overflow-auto">
          {mintResult.description}
        </Description>
      </div>
    </article>
  );
};

export const mintResultPropTypes = {
  
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  
};

MintResultCard.propTypes = {
  mintResult: PropTypes.exact(mintResultPropTypes),
};

export default MintResultCard;
