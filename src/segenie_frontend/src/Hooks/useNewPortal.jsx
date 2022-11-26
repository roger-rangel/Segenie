//import useICPDatabase from './useICPDatabase';
//import useWeb3Identity from './useWeb3Identity';
//import useActor from './useActor';

const useNewPortal = () => {
  //const { uploadDataURL } = useICPDatabase();
  //const { authToken } = useWeb3Identity();
  //const actor = useActor();

  const getAllPortals = async () => {
    console.log("Getting all portals.")
  };

  const createPortal = async (name, description, imageDataURL) => {
    console.log("Creating a portal.")
  };

  const checkAuthToken = () => {
    //if (!authToken) throw new Error("Can't create a new Portal without entering Web3");
  };

  return { createPortal, getAllPortals };
};
export default useNewPortal;