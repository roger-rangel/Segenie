import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import SignInModalBody from '../AuthModalBody/AuthModalBody';
import Layer from '../../../components/Layer/Layer';
import Loader from '../../../components/Loader/Loader';
import useWeb3Identity from '../../../Hooks/useWeb3Identity';
import Page from '../../../components/Page/Page';
import Modal from 'react-modal';

const AuthModal = ({onConnect}) => {
  const [signInData, setSignInData] = useState({
    username: '',
    password: '',
  });
  const [shouldShowLoader, setShouldShowLoader] = useState(false);

  const { signUp, signIn } = useWeb3Identity();
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';

  const onSubmitSignUpForm = async (event) => {
    try {
      setShouldShowLoader(true);
      event.preventDefault();
      const { username, password } = signInData;
      await signUp(username, password);
      navigate(from, { replace: true });
    } catch (error) {
      console.error(error);
      setShouldShowLoader(false);
    }
  };

  const onSubmitSignInForm = async (event) => {
    try {
      setShouldShowLoader(true);
      event.preventDefault();
      const { username, password } = signInData;
      await signIn(username, password);
      navigate(from, { replace: true });
    } catch (error) {
      console.error(error);
      setShouldShowLoader(false);
    }
  };
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      backgroundColor: 'transparent',
      border: 'none',
      transform: 'translate(-50%, -50%)',
    },
    overlay: {
        background: 'rgba(255, 255, 255, 0.20)',
    }
  };

  return (
    <>
    <Modal
        isOpen={true}
        // onRequestClose={closePortal}
        style={customStyles}
        contentLabel="Login Modal"
      >
       
     
      <Page>
        <div className="text-[white] font-[Raleway] mt-6 mb-12">
          <h1>Please Login to Continue</h1>
        </div>
        <SignInModalBody
          signInData={signInData}
          setSignInData={setSignInData}
          onSubmitSignUpForm={onSubmitSignUpForm}
          onSubmitSignInForm={onSubmitSignInForm}
          onClickConnectWalletButton={onConnect}
        />
      </Page>
      {shouldShowLoader && (
        <Layer>
          <Loader />
        </Layer>
      )}
       </Modal>
    </>
  );
};

export default AuthModal;
