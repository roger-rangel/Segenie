import React, {useState, useEffect} from 'react';

import useNewPortal from '../../Hooks/useNewPortal';
import ModalContainer from './PortalModalComponents/ModalContainer/ModalContainer';
import MintResultModal from './PortalModalComponents/MintResultModal/MintResultModal';
import MintInformationModal from './PortalModalComponents/MintInformationModal/MintInformation.Modal';
import NewPortalFirstModal from './PortalModalComponents/NewPortalFirstModal/NewPortalFirstModal';

const newPortal = () => {
  const [currentModalIndex, setCurrentModalIndex] = useState(0);
  const [portal, setPortal] = useState({
    name: '',
    description: '',
  });

  useEffect(() => {
    console.log('Portal', portal);
  }, [portal])

  const [shouldShowLoader, setShouldShowLoader] = useState(false);

  const showPreviousModal = () => setCurrentModalIndex(currentModalIndex - 1);
  const showNextModal = () => setCurrentModalIndex(currentModalIndex + 1);

  const onClickNextButton = async (imageDataURL) => {
    showNextModal();
    setPortal({
      ...portal,
    });
  };

  const onClickMintButton = async ({ name, description }) => {
    try {
      //setShouldShowLoader(true);
      let res = await useNewPortal().createPortal(name, description, "");
      alert(res);
      showNextModal();
      setPortal({name, description});
    } catch (error) {
      console.error(error);
    } finally {
      //setShouldShowLoader(false);
    }
  };

  const modals = [
    <NewPortalFirstModal onClickNextButton={onClickNextButton} />,
    <MintInformationModal
      heading="Portal creation"
      subtitle="Create a portal that can give special access to hidden places inside the Metaverse"
      onClickPreviousButton={showPreviousModal}
      onClickMintButton={onClickMintButton}
    />,
    <MintResultModal
      heading="Amazing! A new Portal has been created!"
      subtitle="Time to discover new worlds inside the Metaverse"
      mintResult={portal}
    />
  ];

  return (
    <>
      <main className="relative items-center justify-center h-max mb-12">
        <ModalContainer>{modals[currentModalIndex]}</ModalContainer>
       
        {shouldShowLoader && (
          <Layer>
            <Loader />
          </Layer>
        )}
      
      </main>
    </>
  );
};

export default newPortal;
