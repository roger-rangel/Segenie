import React from 'react';
import PropTypes from 'prop-types';
import AspectRatio from '../AspectRatio/AspectRatio';
import Heading from '../Heading/Heading';
import Chip from '../Chip/Chip';
import Description from '../Description/Description';

const MintResultCard = ({ mintResult }) => {
  return (
    <article className="flex flex-col bg-[#18162c] rounded-[1.5rem] overflow-hidden Description-left">
      <AspectRatio ratio="fourByThree">
        <img className="container h-full object-cover" src={mintResult.imageURL} alt="" />
      </AspectRatio>
      <div className="p-4">
        <Heading type="secondary">{mintResult.name}</Heading>
        <div className="flex flex-wrap gap-3 mb-3">
          {mintResult.keywords.split(/\s*,\s*/).map((keyword, index) => (
            <Chip key={index}>{keyword}</Chip>
          ))}
        </div>
        <Description className="max-h-[150px] overflow-auto">
          {mintResult.description}
        </Description>
      </div>
    </article>
  );
};

export const mintResultPropTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
  creator: PropTypes.string.isRequired,
};

MintResultCard.propTypes = {
  mintResult: PropTypes.exact(mintResultPropTypes),
};

export default MintResultCard;
