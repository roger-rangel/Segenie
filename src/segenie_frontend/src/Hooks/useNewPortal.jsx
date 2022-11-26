import { createActor } from "../../../declarations/segenie_backend/index";

const useNewPortal = () => {
  const canisterId = "rrkah-fqaaa-aaaaa-aaaaq-cai";
  const actor = createActor(canisterId);

  const getAllPortals = async () => {
    console.log("Getting all portals.")
  };

  const createPortal = async (name, description, imageDataURL) => {
    console.log("Creating a portal.")
    
    const response = await actor.create_portal(name, description);
    return response;
  };

  return { createPortal, getAllPortals };
};
export default useNewPortal;