import React from 'react';
import Title from '../../../../components/Title/Title';
import PropTypes from 'prop-types';

const PageTitle = ({ heading, subtitle }) => {
  return (
    <header className="mt-12 mb-12">
      <Title type="primary">{heading}</Title>
      <p className="mt-12 mx-6 font-raleway text-xl text-[#e6e6e6]">
        {subtitle}
      </p>
    </header>
  );
};

PageTitle.propTypes = {
  heading: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};
export default PageTitle;
