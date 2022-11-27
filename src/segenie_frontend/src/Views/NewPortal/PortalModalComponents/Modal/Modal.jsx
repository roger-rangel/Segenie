import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ children }) => {
  return <article className="container max-w-[800px] my-0 mx-auto py-12 px-8 bg-[#191c29] text-center">{children}</article>;
};

Modal.propTypes = {
  children: PropTypes.node,
};

export default Modal;