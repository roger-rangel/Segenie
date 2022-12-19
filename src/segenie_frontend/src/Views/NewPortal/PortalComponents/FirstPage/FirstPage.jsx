import React from 'react';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

//Portal Modal Components
import Link from '../Link/Link';
import Page from '../../../../components/Page/Page';
import PageTitle from '../PageTitle/PageTitle';
import PageFooter from '../PageFooter/PageFooter';
import FirstPageContent from '../FirstPageContent/FirstPageContent';

//Main Components
import Button from '../../../../components/Button/Button';

const FirstPage = ({ onClickNextButton }) => {
  const [imageDataURL, setImageDataURL] = useState(null);

  const footerButtons = [
    <Link to="/">
      <Button label="Back" order="reverse" />
    </Link>,
    <Button label="Next" onClick={() => onClickNextButton(imageDataURL)} />,
  ];

  return (
    <Page>
      <PageTitle
        heading="New Portal"
        subtitle="Create a portal that can give special access to hidden places inside the Metaverse"
      />
      <FirstPageContent
        imageDataURL={imageDataURL}
        setImageDataURL={setImageDataURL}
      />
      <PageFooter buttons={footerButtons} />
    </Page>
  );
};

FirstPage.propTypes = {
  onClickNextButton: PropTypes.func.isRequired,
};

export default FirstPage;
