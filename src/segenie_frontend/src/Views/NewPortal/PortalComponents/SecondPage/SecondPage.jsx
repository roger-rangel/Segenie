import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PageTitle from '../PageTitle/PageTitle';
import PageFooter from '../PageTitle/PageFooter/PageFooter';
import SecondPageContent from '../SecondPageContent/SecondPageContent';

//Main Components
import Page from '../../../../components/Page/Page';
import Button from '../../../../components/Button/Button';

const SecondPage = ({ heading, subtitle, goBack, onClickMintButton, provider, portalCount }) => {
  const [mintInformation, setMintInformation] = useState({
    name: '',
    description: '',
    limit: NaN,
    nft: 'NFT',
    imageUrl: null,
  });

  const footerButtons = [
    <Button label="Back" order="reverse" onClick={goBack} />,
    <Button
      label="Create"
      // TODO: This is terrible form validation. If some of the input fields is not filled
      // and the user tries to continue nothing happens, there is no note or anything saying which fields are required etc.
      isDisabled={!mintInformation.name || !mintInformation.description}
      onClick={() => onClickMintButton(mintInformation)}
    />,
  ];

  return (
    <Page>
      <PageTitle heading={heading} subtitle={subtitle} />
      <SecondPageContent
        mintInformation={mintInformation}
        setMintInformation={setMintInformation}
        provider={provider}
        portalCount={portalCount}
      />
      <PageFooter buttons={footerButtons} />
    </Page>
  );
};

SecondPage.propTypes = {
  heading: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  goBack: PropTypes.func.isRequired,
  onClickMintButton: PropTypes.func.isRequired,
  provider: PropTypes.any.isRequired,
};

export default SecondPage;
