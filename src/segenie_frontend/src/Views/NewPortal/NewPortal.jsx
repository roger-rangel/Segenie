import { React, useState } from 'react';

import useNewPortal from '../../Hooks/useNewPortal';
import ModalContainer from './PortalModalComponents/ModalContainer/ModalContainer';
import MintResultModal from './PortalModalComponents/MintResultModal/MintResultModal';
import MintInformationModal from './PortalModalComponents/MintInformationModal/MintInformation.Modal';
import NewPortalFirstModal from './PortalModalComponents/NewPortalFirstModal/NewPortalFirstModal';

//components
import Layer from '../../components/Layer/Layer';
import Loader from '../../components/Loader/Loader';

const newPortal = () => {
  const [currentModalIndex, setCurrentModalIndex] = useState(0);
  const [portal, setPortal] = useState({
    name: '',
    description: '',
    imageURL: '',
    creator: ''
  });
  const [shouldShowLoader, setShouldShowLoader] = useState(false);
  const { newNFT } = useNewPortal();

  const showPreviousModal = () => setCurrentModalIndex(currentModalIndex - 1);
  const showNextModal = () => setCurrentModalIndex(currentModalIndex + 1);

  const onClickNextButton = (imageDataURL) => {
    showNextModal();
    setPortal({
      ...portal,
      imageURL: imageDataURL,
    });
  };

  const onClickMintButton = async ({ name, description, creator }) => {
    try {
      setShouldShowLoader(true);
      await newNFT(name, description, portal.imageURL);
      showNextModal();
      setPortal({
        ...portal,
        name,
        description,
        creator
      });
    } catch (error) {
      console.error(error);
    } finally {
      setShouldShowLoader(false);
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
    />,
  ];

  return (
    <>
      <ModalContainer>{modals[currentModalIndex]}</ModalContainer>
      {shouldShowLoader && (
        <Layer>
          <Loader />
        </Layer>
      )}
    </>
  );
};
export default newPortal;


