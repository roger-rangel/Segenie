import React from 'react';

// Modal Components
import OptionsModalBody from '../OptionsModalBody/OptionsModalBody';
import Modal from '../../../NewPortal/PortalModalComponents/Modal/Modal';
import ModalHeader from '../../../NewPortal/PortalModalComponents/ModalHeader/ModalHeader';

const OptionsModal = () => {
  return (
    <Modal>
      <ModalHeader
        heading="Discover the Metaverse through Portals, Communities, and More"
        subtitle="Are you ready to discover new Virtual Worlds?"
      />
      <OptionsModalBody />
    </Modal>
  );
};

export default OptionsModal;