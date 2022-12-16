import React, { useState, useEffect } from 'react';
import { Web3Context } from '../../Context/Web3Context';
import PropTypes from 'prop-types';
import useActor from '../../Hooks/useActor';
import { useConnect } from '@connect2ic/react';
import { AuthClient } from '@dfinity/auth-client';
import { hash } from 'bcryptjs';

let resolveConnectWallet;
let rejectConnectWallet;

const Web3AuthProvider = ({ children }) => {
  const storedAuthToken = localStorage.getItem('authToken');

  const [authToken, setAuthToken] = useState(storedAuthToken);
  const [authClient, setAuthClient] = useState(null);
  const [hasClickedConnectWalletButton, setHasClickedConnectWalletButton] =
    useState(false);
  const [hasConnectedWallet, setHasConnectedWallet] = useState(false);

  const actor = useActor();
  const { connect } = useConnect({
    onConnect: () => setHasConnectedWallet(true),
  });

  useEffect(() => initAuthClient(), []);
  useEffect(() => {
    if (authClient && hasConnectedWallet) {
      const identity = authClient.getIdentity();
      actor.connectWeb3Identity(identity);
    }
  }, [authClient, hasConnectedWallet]);
  useEffect(() => {
    if (actor.web3IdentityConnected && hasClickedConnectWalletButton) {
      signInNatively()
        .then(() => {
          setHasClickedConnectWalletButton(false);
          resolveConnectWallet?.();
        })
        .catch((error) => {
          setHasClickedConnectWalletButton(false);
          rejectConnectWallet?.(error);
        });
    }
  }, [actor.web3IdentityConnected, hasClickedConnectWalletButton]);

  const initAuthClient = async () => {
    try {
      const authClient = await AuthClient.create();
      setAuthClient(authClient);
    } catch (error) {
      console.error(error);
    }
  };

  const signUp = async (username, password) => {
    try {
      const hashedPassword = await hash(password, 10);
      const { hadSuccess, responseResult, errorMessage } =
        await actor.registerNewWeb3User({
          usernameIn: username,
          passwordIn: hashedPassword,
          doSucceed: true,
        });
      if (!hadSuccess) throw new Error(errorMessage);
      const authToken = responseResult;
      console.log('Successfuly signed up and got auth token', authToken);
      saveAuthToken(authToken);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const signIn = async (username, password) => {
    try {
      const hashedPassword = await hash(password, 10);
      const { hadSuccess, responseResult, errorMessage } =
        await actor.authenticateWeb3User({
          usernameIn: username,
          passwordIn: hashedPassword,
          doSucceed: true,
        });
      if (!hadSuccess) throw new Error(errorMessage);
      const authToken = responseResult;
      console.log('Successfuly signed in and got auth token', authToken);
      saveAuthToken(authToken);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const connectWallet = (providerId) =>
    new Promise((resolve, reject) => {
      resolveConnectWallet = resolve;
      rejectConnectWallet = reject;
      connect(providerId);
      setHasClickedConnectWalletButton(true);
    });

  const signInNatively = async () => {
    try {
      console.log('trying to sign in natively');
      const { hadSuccess, responseResult, errorMessage } =
        await actor.authenticateNatively({
          doSucceed: true,
        });
      if (!hadSuccess) throw new Error(errorMessage);
      const authToken = responseResult;
      console.log(
        'Successfuly signed in natively and got auth token',
        authToken
      );
      saveAuthToken(authToken);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const saveAuthToken = (authToken) => {
    setAuthToken(authToken);
    localStorage.setItem('authToken', authToken);
  };

  const signOut = () => removeAuthToken();

  const removeAuthToken = () => {
    localStorage.removeItem('authToken');
    setAuthToken(null);
  };

  const value = {
    authToken,
    signUp,
    signIn,
    signOut,
    connectWallet,
  };

  return <Web3Context.Provider value={value}>{children}</Web3Context.Provider>;
};

Web3AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default Web3AuthProvider;
