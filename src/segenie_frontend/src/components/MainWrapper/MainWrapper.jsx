import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from '../Wrapper/Wrapper';

const MainWrapper = ({ children }) => {
  return (
    <main className="h-screen overflow-visible">
      <div className="py-16 px-0 min-h-screen flex flex-col justify-center">
        <Wrapper>{children}</Wrapper>

      </div>
    </main>
  );
};

MainWrapper.propTypes = {
  children: PropTypes.node,
};

export default MainWrapper;
