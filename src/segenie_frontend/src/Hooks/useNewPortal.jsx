import { createActor, canisterId } from '../../../declarations/segenie_backend/index';
import { idlFactory } from '../../../declarations/segenie_backend/segenie_backend.did.js';
import {Principal} from "@dfinity/principal";

const useNewPortal = () => {
  const actor = createActor(canisterId);

  const getAllPortals = async () => {
    console.log('Getting all portals of the user.');
    try {
      const response = await actor.get_portals_of_caller();
      console.log(response);
    } catch (e) {
      console.error(e);
      throw e;
    }
  };

  const createPortalBlueprint = async (provider, name, description, imageDataURL) => {
    console.log('Creating a portal blueprint.');
    const customActor = (await provider.activeProvider.createActor(canisterId, idlFactory)).value;
    console.log(customActor);
    try {
      if (imageDataURL)
        return await customActor.create_portal(name, description, imageDataURL);
      else return await customActor.create_portal(name, description);
    } catch (e) {
      console.error(e);
      throw e;
    }
  };

  const mintPortal = async (provider, portalId, receiver) => {
    console.log('Minting a portal.');
    const customActor = (await provider.activeProvider.createActor(canisterId, idlFactory)).value;
    try {
      const principal = Principal.from(receiver)
      return await customActor.mint_portal(Number(portalId), principal);
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  return { createPortalBlueprint, getAllPortals, mintPortal };
};
export default useNewPortal;
