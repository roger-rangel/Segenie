import React, { useState, useEffect } from 'react';
import useNewPortal from '../../Hooks/useNewPortal';
import FirstPage from './PortalComponents/FirstPage/FirstPage';
import SecondPage from './PortalComponents/SecondPage/SecondPage';
import ThirdPage from './PortalComponents/ThirdPage/ThirdPage';
import MainWrapper from '../../components/MainWrapper/MainWrapper';
import mixpanel from "mixpanel-browser";

mixpanel.init(process.env.MIXPANEL);

const NewPortal = ({provider}) => {
  const [pageIndex, setPageIndex] = useState(0);
  const [portal, setPortal] = useState({
    name: 'Portal X',
    description: 'Portal X can give you access to X Metaverse',
  });
  const [portalCount, setPortalCount] = useState(0);
  const { createPortalBlueprint, getPortalCount } = useNewPortal();

  useEffect(() => {
    mixpanel.track("Portal Blueprint Creation visited");
    getPortalCount().then(count => setPortalCount(count));
  }, []);

  const showPreviousPage = () => setPageIndex(pageIndex - 1);
  const showNextPage = () => setPageIndex(pageIndex + 1);

  const onClickNextButton = async () => {
    showNextPage();
    setPortal({
      ...portal,
    });
  };

  const onClickMintButton = async ({ name, description, limit, nft, imageUrl }) => {
    try {
      console.log(name, description, limit, nft);
      await createPortalBlueprint(provider, name, description, limit, nft, imageUrl);
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
      provider={provider}
      portalCount={portalCount}
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

export default NewPortal;
