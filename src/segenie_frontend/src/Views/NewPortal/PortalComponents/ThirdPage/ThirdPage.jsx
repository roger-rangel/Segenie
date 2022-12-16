import React from 'react';
import Page from '../../../../components/Page/Page';
import ThirdPageContent from '../ThirdPageContent/ThirdPageContent';
import PageFooter from '../PageFooter/PageFooter';
import PropTypes from 'prop-types';
import PageTitle from '../PageTitle/PageTitle';
import Button from '../../../../components/Button/Button';
import Link from '../Link/Link';
import { portalPropTypes } from '../MintedPortal/MintedPortal';

const ThirdPage = ({ heading, mintResult }) => {
  const footerButtons = [
    <Link to="/">
      <Button label="New Portal" order="reverse" />
    </Link>,
    <Link to="/">
      <Button label="Finish" />
    </Link>,
  ];

  return (
    <Page className="">
      <PageTitle heading={heading} />
      <ThirdPageContent mintResult={mintResult} />
      <PageFooter buttons={footerButtons} />
    </Page>
  );
};

ThirdPage.propTypes = {
  heading: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  mintResult: PropTypes.exact(portalPropTypes).isRequired,
};

export default ThirdPage;
