import React, { useState, useEffect } from 'react';

import useNewPortal from '../../Hooks/useNewPortal';

import FirstPage from './PortalComponents/FirstPage/FirstPage';
import SecondPage from './PortalComponents/SecondPage/SecondPage';
import ThirdPage from './PortalComponents/ThirdPage/ThirdPage';

import MainWrapper from '../../components/MainWrapper/MainWrapper';

const newPortal = ({provider}) => {
  const [pageIndex, setPageIndex] = useState(0);
  const [portal, setPortal] = useState({
    name: 'Portal X',
    description: 'Portal X can give you access to X Metaverse',
  });
  useEffect(() => {
    console.log('Portal', portal);
    console.log("Provider: ");
    console.log(provider);
  }, [portal]);

  const { createPortal } = useNewPortal();

  const showPreviousPage = () => setPageIndex(pageIndex - 1);
  const showNextPage = () => setPageIndex(pageIndex + 1);

  const onClickNextButton = async (imageDataURL) => {
    showNextPage();
    setPortal({
      ...portal,
    });
  };

  const onClickMintButton = async ({ name, description }) => {
    try {
      let res = await createPortal(provider, name, description, '');
      // alert(res);
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
      heading="Portal creation"
      subtitle="Create a portal that can give special access to hidden places inside the Metaverse"
      goBack={showPreviousPage}
      onClickMintButton={onClickMintButton}
    />,
    <ThirdPage
      heading="Amazing! A new Portal has been created!"
      subtitle="Time to discover new worlds inside the Metaverse"
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
