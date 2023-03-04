import React, { useState, useEffect } from 'react';

import useNewPortal from '../../Hooks/useNewPortal';

import FirstPage from './PortalComponents/FirstPage/FirstPage';
import SecondPage from './PortalComponents/SecondPage/SecondPage';
import ThirdPage from './PortalComponents/ThirdPage/ThirdPage';

import MainWrapper from '../../components/MainWrapper/MainWrapper';
import mixpanel from "mixpanel-browser";

mixpanel.init(process.env.MIXPANEL);

const newPortal = ({provider}) => {

  useEffect(() => {
    mixpanel.track("Portal Blueprint Creation visited");
  }, []);

  const [pageIndex, setPageIndex] = useState(1);
  const [portal, setPortal] = useState({
    name: 'Portal X',
    description: 'Portal X can give you access to X Metaverse',
  });
  useEffect(() => {
    console.log('Portal', portal);
    console.log("Provider: ");
    console.log(provider);
  }, [portal]);

  const { createPortalBlueprint } = useNewPortal();

  const showPreviousPage = () => setPageIndex(pageIndex - 1);
  const showNextPage = () => setPageIndex(pageIndex + 1);

  const onClickNextButton = async (imageDataURL) => {
    showNextPage();
    setPortal({
      ...portal,
    });
  };

  const onClickMintButton = async ({ name, description, limit, soulbound }) => {
    try {
      console.log(name, description, limit, soulbound);
      await createPortalBlueprint(provider, name, description, limit, '');
      setPortal({ name, description });
      showNextPage();
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  const pages = [
    <FirstPage onClickNextButton={onClickNextButton} />,
    <SecondPage
      heading="Portal blueprint creation"
      subtitle="Portal holders will be able to access your special content, community, web app, or anything imaginable in the Metaverse"
      goBack={showPreviousPage}
      onClickMintButton={onClickMintButton}
    />,
    <ThirdPage
      heading="Amazing! A new Portal has been created!"
      subtitle="Time for humans to discover new worlds with your new Portal"
      mintResult={portal}
    />,
  ];

  return (
    <>
      <main className="relative items-center justify-center h-max mb-12">
        <MainWrapper>{pages[pageIndex]}</MainWrapper>
      </main>
    </>
  );
};

export default newPortal;
