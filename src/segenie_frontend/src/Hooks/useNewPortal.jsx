import { createActor } from '../../../declarations/segenie_backend/index';
import { idlFactory } from '../../../declarations/segenie_backend/segenie_backend.did.js';

const useNewPortal = () => {
  const canisterId = 'r7inp-6aaaa-aaaaa-aaabq-cai';
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

  const createPortal = async (provider, name, description, imageDataURL) => {
    console.log('Creating a portal.');
    const res = await provider.activeProvider.connect();
    console.log(res);
    const customActor = (await provider.activeProvider.createActor(canisterId, idlFactory)).value;
    console.log(customActor);
    /*try {
      if (imageDataURL)
        return await customActor.create_portal(name, description, imageDataURL);
      else return await customActor.create_portal(name, description);
    } catch (e) {
      console.error(e);
      throw e;
    }
    */
  };

  return { createPortal, getAllPortals };
};
export default useNewPortal;
