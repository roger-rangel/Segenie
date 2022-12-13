import React from 'react';
import PropTypes from 'prop-types';

const PageFooter = ({ buttons }) => {
  return (
    <footer className="flex justify-center mt-12 gap-4">
      {buttons.map((button, index) => (
        <div
          key={index}
          className="flex-1 first:justify-end first:flex last:justify-start last:flex"
        >
          {button}
        </div>
      ))}
    </footer>
  );
};

PageFooter.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.element),
};

export default PageFooter;
