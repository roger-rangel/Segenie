import React from 'react';
import NewPortalSecondModalBody from '../NewPortalSecondModalBody/NewPortalSecondModalBody';
import ModalFooter from '../ModalFooter/ModalFooter';
import { ReactComponent as MintIcon } from '../../../../../assets/icons/mint-icon.svg';
import { ReactComponent as LeftArrow } from '../../../../../assets/icons/left-arrow.svg';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Modal from '../Modal/Modal';
import ModalHeader from '../ModalHeader/ModalHeader';
import Button from '../../../../components/Button/Button';

const MintInformationModal = ({
  heading,
  subtitle,
  onClickPreviousButton,
  onClickMintButton,
}) => {
  const [mintInformation, setMintInformation] = useState({
    name: '',
    description: '',
    creator: ''
  });

  const footerButtons = [
    <Button
      label="Previous"
      Icon={LeftArrow}
      fill="transparent"
      order="reverse"
      onClick={onClickPreviousButton}
    />,
    <Button
      label="Mint"
      Icon={MintIcon}
      // TODO: This is terrible form validation. If some of the input fields is not filled 
      // and the user tries to continue nothing happens, there is no note or anything saying which fields are required etc.
      isDisabled={
        !mintInformation.name ||
        !mintInformation.description ||
        !mintInformation.creator
      }
      onClick={() => onClickMintButton(mintInformation)}
    />,
  ];

  return (
    <Modal>
      <ModalHeader heading={heading} subtitle={subtitle} />
      <NewPortalSecondModalBody
        mintInformation={mintInformation}
        setMintInformation={setMintInformation}
      />
      <ModalFooter buttons={footerButtons} />
    </Modal>
  );
};

MintInformationModal.propTypes = {
  heading: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  onClickPreviousButton: PropTypes.func.isRequired,
  onClickMintButton: PropTypes.func.isRequired,
};

export default MintInformationModal;