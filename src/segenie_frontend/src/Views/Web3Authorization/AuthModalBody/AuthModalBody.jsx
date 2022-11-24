import { useState } from 'react';
import PropTypes from 'prop-types';

// CSS
import styles from './AuthModalBody.module.scss';

import { useProviders } from '@connect2ic/react';

//Components
import Button from '../../../components/Button/Button';
import Heading from '../../NewPortal/PortalModalComponents/Heading/Heading';
import TextInput from '../../NewPortal/PortalModalComponents/TextInput/TextInput';
import Description from '../../NewPortal/PortalModalComponents/Description/Description';

//Icons
import { ReactComponent as SignInIcon } from '../../../../assets/icons/sign-in-icon.svg';
import { ReactComponent as DfinityIcon } from '../../../../assets/icons/dfinity-icon.svg';

const AuthModalBody = ({
  signInData,
  setSignInData,
  onSubmitSignUpForm,
  onSubmitSignInForm,
  onClickConnectWalletButton,
}) => {
  const [tab, setTab] = useState('sign-in');

  const providers = useProviders();

  const providerIcons = {
    ii: DfinityIcon,
  };

  const onChangeInput = (event) => {
    setSignInData({
      ...signInData,
      [event.target.name]: event.target.value,
    });
  };

  const renderTab = () => {
    switch (tab) {
      case 'sign-in':
        return (
          <>
            <Heading type="secondary">Sign in</Heading>
            <div className={styles.signUpNoteContainer}>
              <Description>
                No account yet?{' '}
                <button
                  className={styles.signUpButton}
                  onClick={() => setTab('sign-up')}
                >
                  Sign up
                </button>
              </Description>
            </div>
            <form className={styles.form} onSubmit={onSubmitSignInForm}>
              <TextInput
                placeholder="Username"
                name="username"
                isRequired={true}
                onChange={onChangeInput}
              />
              <TextInput
                placeholder="Password"
                name="password"
                isRequired={true}
                type="password"
                onChange={onChangeInput}
              />
              <div className={styles.buttonContainer}>
                <Button
                  label="Sign in"
                  Icon={SignInIcon}
                  fill="transparent"
                  type="submit"
                />
              </div>
            </form>
          </>
        );
      case 'sign-up':
        return (
          <>
            <Heading type="secondary">Sign up</Heading>
            <div className={styles.signUpNoteContainer}>
              <Description>
                Already got an account?{' '}
                <button
                  className={styles.signUpButton}
                  onClick={() => setTab('sign-in')}
                >
                  Sign in
                </button>
              </Description>
            </div>
            <form className={styles.form} onSubmit={onSubmitSignUpForm}>
              <TextInput
                placeholder="Username"
                name="username"
                isRequired={true}
                onChange={onChangeInput}
              />
              <TextInput
                placeholder="Password"
                name="password"
                isRequired={true}
                type="password"
                onChange={onChangeInput}
              />
              <div className={styles.buttonContainer}>
                <Button
                  label="Sign up"
                  Icon={SignInIcon}
                  fill="transparent"
                  type="submit"
                />
              </div>
            </form>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles.authModalBody}>
      <div className={styles.walletConnectContainer}>
        <Heading type="secondary">Connect wallet</Heading>
        {providers.map(({ id, name }) => (
          <div key={id}>
            <Button
              label={name}
              Icon={providerIcons[id]}
              onClick={() => onClickConnectWalletButton(id)}
            />
          </div>
        ))}
      </div>
      <div className={styles.linesContainer}>
        <div className={styles.line} />
        or
        <div className={styles.line} />
      </div>
      <div className={styles.signInContainer}>{renderTab()}</div>
    </div>
  );
};

AuthModalBody.propTypes = {
  signInData: PropTypes.exact({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }).isRequired,
  setSignInData: PropTypes.func.isRequired,
  onSubmitSignUpForm: PropTypes.func,
  onSubmitSignInForm: PropTypes.func,
  onClickConnectWalletButton: PropTypes.func,
};

export default AuthModalBody;