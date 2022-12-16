import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import SignInModalBody from '../AuthModalBody/AuthModalBody';
import Layer from '../../../components/Layer/Layer';
import Loader from '../../../components/Loader/Loader';
import useWeb3Identity from '../../../Hooks/useWeb3Identity';
import Page from '../../../components/Page/Page';
import PageTitle from '../../NewPortal/PortalComponents/PageTitle/PageTitle';

const AuthModal = () => {
  const [signInData, setSignInData] = useState({
    username: '',
    password: '',
  });
  const [shouldShowLoader, setShouldShowLoader] = useState(false);

  const { signUp, signIn, connectWallet } = useWeb3Identity();
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

  const onClickConnectWalletButton = async (providerId) => {
    try {
      setShouldShowLoader(true);
      await connectWallet(providerId);
      navigate(from, { replace: true });
    } catch (error) {
      console.error(error);
      setShouldShowLoader(false);
    }
  };

  return (
    <>
      <Page>
        <PageTitle
          heading="Web 3 Authentication"
          subtitle="Enter Web3 to enjoy Segenie"
        />
        <SignInModalBody
          signInData={signInData}
          setSignInData={setSignInData}
          onSubmitSignUpForm={onSubmitSignUpForm}
          onSubmitSignInForm={onSubmitSignInForm}
          onClickConnectWalletButton={onClickConnectWalletButton}
        />
      </Page>
      {shouldShowLoader && (
        <Layer>
          <Loader />
        </Layer>
      )}
    </>
  );
};
export default AuthModal;
