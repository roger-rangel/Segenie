import React from 'react';
import PropTypes from 'prop-types';
import Container from '../../../../components/Container/Container';

const ModalContainer = ({ children }) => {
  return (
    <main className="h-screen overflow-visible">
      <div className="py-16 px-0 min-h-screen flex flex-col justify-center">
        <Container>{children}</Container>
        <video autoPlay loop="loop" muted
               className="-z-3 w-auto min-w-full min-h-full max-w-none absolute">
        <source
          src="./videos/background.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      </div>
      
    </main>
  );
};

ModalContainer.propTypes = {
  children: PropTypes.node,
};

export default ModalContainer;