import ModalFooter from '../ModalFooter/ModalFooter';
import { ReactComponent as MakeAgainIcon } from '../../../../../assets/icons/make-again-icon.svg';
import { ReactComponent as VerifyIcon } from '../../../../../assets/icons/verify-icon.svg';
import PropTypes from 'prop-types';
import MintResultModalBody from '../MintResultModalBody/MintResultModalBody';
import Modal from '../Modal/Modal';
import ModalHeader from '../ModalHeader/ModalHeader';
import Button from '../../../../components/Button/Button';
import Link from '../Link/Link';
import { mintResultPropTypes } from '../MintResultCard/MintResultCard';

const MintResultModal = ({
  heading,
  subtitle,
  mintResult,
}) => {
  const footerButtons = [
    <Link to="/segenie-options">
      <Button label="MakeAgain" Icon={MakeAgainIcon} fill="transparent" order="reverse" />
    </Link>,
    <Link to="/">
      <Button label="Finish" Icon={VerifyIcon} />
    </Link>,
  ];

  return (
    <Modal>
      <ModalHeader heading={heading} subtitle={subtitle} />
      <MintResultModalBody
        mintResult={mintResult}
      />
      <ModalFooter buttons={footerButtons} />
    </Modal>
  );
};

MintResultModal.propTypes = {
  heading: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  mintResult: PropTypes.exact(mintResultPropTypes).isRequired,
  onClickRemixStudioButton: PropTypes.func,
};

export default MintResultModal;