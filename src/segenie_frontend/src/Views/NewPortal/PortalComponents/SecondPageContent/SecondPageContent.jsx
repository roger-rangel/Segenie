import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import UserInput from '../UserInput/UserInput';
import Title from '../../../../components/Title/Title';
import { HttpAgent } from "@dfinity/agent";
import {AssetManager} from "@dfinity/assets";
import { canisterId } from '../../../../../../declarations/segenie_frontend/index';

const isLocal = !window.location.host.endsWith("ic0.app");

const SecondPageContent = ({ mintInformation, setMintInformation, provider, portalCount }) => {
  const [url, setUrl] = useState("");
  const [assetManager, setAssetManager] = useState(null);

  useEffect(async () => {
    const agent = new HttpAgent({
      host: isLocal ? `http://127.0.0.1:${window.location.port}` : `https://ic0.app`, 
      principal: provider.principal
    });
    await agent.fetchRootKey();

    const manager = new AssetManager({ canisterId, agent, provider});

    setAssetManager(manager);
  }, []);

  const onChangeInput = (event) => {
    setMintInformation({
      ...mintInformation,
      [event.target.name]: event.target.value,
    }, url);
  };

  const uploadPhoto = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.multiple = true;
    input.onchange = async () => { 
      try {
        const file = input.files[0];

        const name = "collection-" + portalCount + "." + file.type.split('/')[1];
        const blob = file.slice(0, file.size, 'image/*'); 
        
        const renamedFile = new File([blob], name, {type: 'image/*'});
        const key = await assetManager.store(renamedFile);
        console.log(key);

        const url = window.location.host + key + "?canisterId=" + canisterId;
        setUrl(url);
      } catch (e) {
        if (e.message.includes('Caller is not authorized')) {
          alert("Caller is not authorized");
        } else {
          throw e;
        }
      }
    };
    input.click();
  }

  return (
    <div>
      <Title type="secondary"></Title>
      <div className="grid grid-cols-1 gap-2 mx-10">
        <UserInput
          className=""
          placeholder="Name"
          name="name"
          onChange={onChangeInput}
        />
        <UserInput
          className=""
          placeholder="Limit: "
          name="limit"
          onChange={onChangeInput}
        />
        <textarea
          className="py-2 px-4 bg-[#080808] rounded font-raleway text-xl
                     border-none resize-none placeholder:text-[#19E7AB] text-[#19E7AB]"
          rows="4"
          placeholder="Description"
          name="description"
          onChange={onChangeInput}
        />
        <div class="text-[white] font-raleway text-xl justify-between flex mx-14">
          <label>
            <UserInput type="radio" name="nft" value="NFT" onChange={onChangeInput}/> NFT (Non-Fungible Token)     
          </label>
          <label>
            <UserInput type="radio" name="nft" value="Soulbound" onChange={onChangeInput}/> Soulbound Token  
          </label>

          <button onClick={uploadPhoto} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Upload</button>
        </div>  
        </div>
    </div>
  );
};

export const mintInformationPropTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  limit: PropTypes.number,
  nft: PropTypes.string
};

SecondPageContent.propTypes = {
  mintInformation: PropTypes.exact(mintInformationPropTypes).isRequired,
  setMintInformation: PropTypes.func.isRequired,
  provider: PropTypes.any.isRequired,
};

export default SecondPageContent;
