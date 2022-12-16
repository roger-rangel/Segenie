import React from 'react';
import PropTypes from 'prop-types';

const Page = ({ children }) => {
  return (
    <article className="container mx-auto bg-[#191c29] text-center page">
      {children}
    </article>
  );
};

Page.propTypes = {
  children: PropTypes.node,
};

export default Page;
