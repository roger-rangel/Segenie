import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

//Portal Modal Components
import Link from '../Link/Link';
import Modal from '../Modal/Modal';
import ModalHeader from '../ModalHeader/ModalHeader';
import ModalFooter from '../ModalFooter/ModalFooter';
import NewPortalSecondModalBody from '../NewPortalSecondModalBody/NewPortalSecondModalBody';

//Icons
import { ReactComponent as LeftArrow } from '../../../../../assets/icons/left-arrow.svg';
import { ReactComponent as RightArrow } from '../../../../../assets/icons/right-arrow.svg';

//Main Components
import Button from '../../../../components/Button/Button';

const NewPortalFirstModal = ({ onClickNextButton }) => {
  const [imageDataURL, setImageDataURL] = useState(null);

  const footerButtons = [
    <Link to="/mint-categories">
      <Button 
        label="Previous"
        Icon={LeftArrow}
        fill="transparent"
        order="reverse"
      />
    </Link>,
    <Button
      label="Next"
      Icon={RightArrow}
      onClick={() => onClickNextButton(imageDataURL)}
    />,
  ];

  return (
    <Modal>
      <ModalHeader
        heading="New Portal"
        subtitle="Create a portal that can give special access to hidden places inside the Metaverse"
      />
      <NewPortalSecondModalBody
        imageDataURL={imageDataURL}
        setImageDataURL={setImageDataURL}
      />
      <ModalFooter buttons={footerButtons} />
    </Modal>
  );
};

NewPortalFirstModal.propTypes = {
  onClickNextButton: PropTypes.func.isRequired,
};

export default NewPortalFirstModal;