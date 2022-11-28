import React from 'react';
import Heading from '../Heading/Heading';
import PropTypes from 'prop-types';

const ModalHeader = ({ heading, subtitle }) => {
  return (
    <header className="mt-12 mb-12">
      <Heading type="primary">{heading}</Heading>
      <p className="mt-12 mx-6 font-raleway text-xl text-[#e6e6e6]">{subtitle}</p>
    </header>
  );
};

ModalHeader.propTypes = {
  heading: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};
export default ModalHeader;