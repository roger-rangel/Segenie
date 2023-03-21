import React from 'react';
import PropTypes from 'prop-types';
import UserInput from '../UserInput/UserInput';
import Title from '../../../../components/Title/Title';

const SecondPageContent = ({ mintInformation, setMintInformation }) => {

  const onChangeInput = (event) => {
    setMintInformation({
      ...mintInformation,
      [event.target.name]: event.target.value,
    });
  };

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
        </div>
        
          <label htmlFor="image">NFT Image:</label>
          <input id="image" alt="image" type="file" accept="image/x-png, image/jpeg, image/gif, image/svg+xml, image/webp" />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Upload</button>
        
        </div>
    </div>
  );
};

export const mintInformationPropTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

SecondPageContent.propTypes = {
  mintInformation: PropTypes.exact(mintInformationPropTypes).isRequired,
  setMintInformation: PropTypes.func.isRequired,
};

export default SecondPageContent;
