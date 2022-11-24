import useICPDatabase from './useICPDatabase';
import useWeb3Identity from './useWeb3Identity';
import useActor from './useActor';

const useNewPortal = () => {
  const { uploadDataURL } = useICPDatabase();
  const { authToken } = useWeb3Identity();
  const actor = useActor();

  const getAllPortals = async () => {
    try {
      const { hadSuccess, responseResult, errorMessage } =
        await actor.obtainPortalViewForFeed({
          forAuthToken: authToken ?? '0',
          doSucceed: true,
        });
      if (!hadSuccess) throw new Error(errorMessage);
      const Portals = responseResult.map((item) => ({
        id: item.assetId,
        name: item.assetDisplayName,
        description: item.assetDescription,
        imageURL: item.assetSourceImageUrl,
        creatorName: item.creatorDisplayName,
        isLiked: item.isLiked,
        createdAt: item.nanoEpochTimeCreated.toString(),
      }));
      return Portals;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const createPortal = async (name, description, imageDataURL) => {
    try {
      checkAuthToken();
      const imageURL = await uploadDataURL(imageDataURL);
      const { hadSuccess, responseResult, errorMessage } =
        await actor.mintPortal({
          forAuthToken: authToken,
          assetDisplayNameIn: name,
          assetDescriptionIn: description,
          assetUrlImageSourceIn: imageURL,
          doSucceed: true,
        });
      if (!hadSuccess) throw new Error(errorMessage);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const checkAuthToken = () => {
    if (!authToken) throw new Error("Can't create a new Portal without entering Web3");
  };

  return { createPortal, getAllPortals };
};
export default useNewPortal;