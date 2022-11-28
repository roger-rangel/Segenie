import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ children }) => {
  return <article className="container mx-auto bg-[#191c29] text-center modal ">{children}</article>;
};

Modal.propTypes = {
  children: PropTypes.node,
};

export default Modal;