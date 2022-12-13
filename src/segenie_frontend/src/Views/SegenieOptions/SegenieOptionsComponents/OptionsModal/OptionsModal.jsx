import React from 'react';

// Modal Components
import Page from '../../../../components/Page/Page';
import OptionsModalBody from '../OptionsModalBody/OptionsModalBody';
import PageTitle from '../../../NewPortal/PortalComponents/PageTitle/PageTitle';

const OptionsModal = () => {
  return (
    <Page>
      <PageTitle
        heading="Discover the Metaverse through Portals, Communities, and More"
        subtitle="Are you ready to discover new Virtual Worlds?"
      />
      <OptionsModalBody />
    </Page>
  );
};

export default OptionsModal;
