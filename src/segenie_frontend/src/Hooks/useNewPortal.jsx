/* eslint-disable use-isnan */
/* eslint-disable eqeqeq */
import { createActor, canisterId } from '../../../declarations/segenie_backend/index';
import { idlFactory } from '../../../declarations/segenie_backend/segenie_backend.did.js';
import {Principal} from "@dfinity/principal";

const useNewPortal = () => {
  var actor = createActor(canisterId);

  const getAllPortals = async (rawPrincipal) => {
    console.log('Getting all portals of the user.');
    try {
      const principal = Principal.from(rawPrincipal)
      return await actor.get_portals_of_user(principal);
    } catch (e) {
      console.error(e);
      throw e;
    }
  };

  const createPortalBlueprint = async (provider, name, description, limit, imageDataURL) => {
    console.log('Creating a portal blueprint.');
    const customActor = (await provider.activeProvider.createActor(canisterId, idlFactory)).value;
    console.log(customActor);
    try {
      if (imageDataURL) {
        return await customActor.create_portal_blueprint(name, description, [], [imageDataURL]);
      }
      else if(Number(limit) != NaN) {
        await customActor.create_portal_blueprint(name, description, [Number(limit)]);
      }
      else {
        return await customActor.create_portal_blueprint(name, description);
      }
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

  const claimPortal = async (provider, color) => {
    let portalId;
    switch(color) {
      case "blue":
        portalId = 3;
        break;
      case "yellow":
        portalId = 4; 
        break;
      case "green":
        portalId = 5;
        break;
      case "red":
        portalId = 6;
        break;
      default:
        // purple
        portalId = 7;
    }

    const receiver = provider.principal;
    console.log(receiver);
    return await mintPortal(provider, portalId, receiver);
  }

  return { createPortalBlueprint, getAllPortals, mintPortal, claimPortal };
};
export default useNewPortal;
