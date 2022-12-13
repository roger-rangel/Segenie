import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from '../Wrapper/Wrapper';

const MainWrapper = ({ children }) => {
  return (
    <main className="h-screen overflow-visible">
      <div className="py-16 px-0 min-h-screen flex flex-col justify-center">
        <Wrapper>{children}</Wrapper>
        <video
          autoPlay
          loop="loop"
          muted
          className="-z-3 w-auto min-w-full min-h-full max-w-none absolute"
        >
          <source src="./videos/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </main>
  );
};

MainWrapper.propTypes = {
  children: PropTypes.node,
};

export default MainWrapper;
