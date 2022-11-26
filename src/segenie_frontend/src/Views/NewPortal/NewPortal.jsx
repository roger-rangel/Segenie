import React, {useState} from 'react';

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
    imageURL: '',
    creator: ''
  });
  const [shouldShowLoader, setShouldShowLoader] = useState(false);

  const showPreviousModal = () => setCurrentModalIndex(currentModalIndex - 1);
  const showNextModal = () => setCurrentModalIndex(currentModalIndex + 1);

  const onClickNextButton = async (imageDataURL) => {
    // this should be in onClickMintButton.
    await useNewPortal().createPortal(portal.name, portal.description, portal.imageURL);
    showNextModal();
    setPortal({
      ...portal,
      imageURL: imageDataURL,
    });
  };

  const onClickMintButton = async ({ name, description, creator }) => {
    try {
      setShouldShowLoader(true);
      //await newNFT(name, description, portal.imageURL);
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
