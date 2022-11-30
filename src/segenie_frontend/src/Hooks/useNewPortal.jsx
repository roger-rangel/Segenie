import { createActor } from "../../../declarations/segenie_backend/index";

const useNewPortal = () => {
  const canisterId = "rrkah-fqaaa-aaaaa-aaaaq-cai";
  const actor = createActor(canisterId);

  const getAllPortals = async () => {
    console.log("Getting all portals of the user.")
    try {
      const response = await actor.get_portals_of_caller();
      console.log(response);
    }catch(e) {
      console.error(e);
      throw e;
    }
  };

  const createPortal = async ( name, description, imageDataURL ) => {
    console.log("Creating a portal.")
    try {
      if(imageDataURL)
        return await actor.create_portal(name, description, imageDataURL);
      else 
        return await actor.create_portal(name, description);
    }catch(e) {
      console.error(e);
      throw e;
    }
  };

  return { createPortal, getAllPortals };
};
export default useNewPortal;