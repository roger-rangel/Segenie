import React from 'react';

import PropTypes from 'prop-types';

const NewPortalFirstModalBody = () => {
  
  return (
    <div className="flex items-center gap-8">
      <div className="flex-1">
        <div className="flex justify-center items-center ">
          <img src="gifs/ball.gif" alt="portal_photo" className="h-44 rounded-full" />
        </div>
      </div>
    </div>
  );
};

NewPortalFirstModalBody.propTypes = {
  imageDataURL: PropTypes.string,
  setImageDataURL: PropTypes.func.isRequired,
};

export default NewPortalFirstModalBody;
