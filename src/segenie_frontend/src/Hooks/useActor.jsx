import { useState } from 'react';

const useActor = () => {
  const defaultActor = createActor();

  const [actor, setActor] = useState(defaultActor);
  const [web3IdentityConnected, setWeb3IdentityConnected] = useState(false);

  function createActor(identity) {
    const agentOptions = {
      host: process.env.REACT_APP_BACKEND_HOST,
    };
    if (identity) agentOptions.identity = identity;
    const actor =
      process.env.NODE_ENV === 'production'
        ? createActorProd(process.env.REACT_APP_CANISTER_ID, {
            agentOptions,
          })
        : createActorDev(process.env.REACT_APP_CANISTER_ID, {
            agentOptions,
          });
    return actor;
  }

  const mintPortal = async (callObject) => {
    return await actor.mintPortal(...changeAccordingToEnv(callObject));
  };

  const connectWeb3Identity = (web3id) => {
    const actor = createActor(web3id);
    setActor(actor);
    setWeb3IdentityConnected(true);
  };

  const changeAccordingToEnv = (callObject) => {
    if (process.env.NODE_ENV === 'production') {
      delete callObject.doSucceed;
      return Object.values(callObject);
    }
    return [callObject];
  };

  const registerNewWeb3User = async (callObject) => {
    return await actor.registerNewWeb3User(
      ...changeAccordingToEnv(callObject)
    );
  };

  const authenticateWeb3User = async (callObject) => {
    return await actor.authenticateWeb3User(
      ...changeAccordingToEnv(callObject)
    );
  };

  const authenticateNatively = async (callObject) => {
    return await actor.authenticateNatively(
      ...changeAccordingToEnv(callObject)
    );
  };

  const obtainPortalViewForFeed = async (callObject) => {
    return await actor.obtainPortalViewForFeed(
      ...changeAccordingToEnv(callObject)
    );
  };

  return {
    mintPortal,
    connectWeb3Identity,
    registerNewWeb3User,
    authenticateNatively,
    authenticateWeb3User,
    web3IdentityConnected,
    obtainPortalViewForFeed,
  };
};

export default useActor;