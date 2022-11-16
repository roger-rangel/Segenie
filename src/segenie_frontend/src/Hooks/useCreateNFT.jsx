import useICPDatabase from './useICPDatabase';
import useWeb3Identity from './useWeb3Identity';
import useActor from './useActor';

const useCreateNFT = () => {
  const { uploadDataURL } = useICPDatabase();
  const { authToken } = useWeb3Identity();
  const actor = useActor();

  const fetchAllNFTs = async () => {
    try {
      const { hadSuccess, responseResult, errorMessage } =
        await actor.getAssetViewModelsForFeed({
          forAuthToken: authToken ?? '0',
          doSucceed: true,
        });
      if (!hadSuccess) throw new Error(errorMessage);
      const NFTs = responseResult.map((item) => ({
        id: item.assetId,
        name: item.assetDisplayName,
        description: item.assetDescription,
        imageURL: item.assetSourceImageUrl,
        comments: item.comments.map((comment) => ({
          id: comment.commentId,
          authorName: comment.authorDisplayName,
          message: comment.commentLiteral,
        })),
        creatorName: item.creatorDisplayName,
        isLiked: item.isLiked,
        createdAt: item.nanoEpochTimeCreated.toString(),
      }));
      return NFTs;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const newNFT = async (name, description, imageDataURL) => {
    try {
      checkAuthToken();
      const imageIPFSURL = await uploadDataURL(imageDataURL);
      const { hadSuccess, responseResult, errorMessage } =
        await actor.mintAsset({
          forAuthToken: authToken,
          assetDisplayNameIn: name,
          assetDescriptionIn: description,
          assetUrlImageSourceIn: imageIPFSURL,
          doSucceed: true,
        });
      if (!hadSuccess) throw new Error(errorMessage);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const checkAuthToken = () => {
    if (!authToken) throw new Error("Can't mint an NFT unauthenticated");
  };

  return { newNFT, fetchAllNFTs };
};
export default useCreateNFT;