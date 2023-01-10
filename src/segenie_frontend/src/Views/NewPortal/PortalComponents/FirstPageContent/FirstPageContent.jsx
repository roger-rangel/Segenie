import React from 'react';

import PropTypes from 'prop-types';

const FirstPageContent = () => {
  return (
    <div className="flex items-center gap-8">
      <div className="flex-1">
        <div className="flex justify-center items-center ">
          <img
            src="img/portal.png"
            alt="portal_photo"
            className="h-60 w-80 rounded-xl -mt-4"
          />
        </div>
      </div>
    </div>
  );
};

FirstPageContent.propTypes = {
  imageDataURL: PropTypes.string,
  setImageDataURL: PropTypes.func.isRequired,
};

export default FirstPageContent;
