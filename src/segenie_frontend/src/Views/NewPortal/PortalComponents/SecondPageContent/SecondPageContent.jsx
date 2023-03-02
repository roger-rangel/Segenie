import React from 'react';
import PropTypes from 'prop-types';
import UserInput from '../UserInput/UserInput';
import Title from '../../../../components/Title/Title';

const SecondPageContent = ({ mintInformation, setMintInformation }) => {
  const [nft, setNFT] = React.useState(true);
  const [soulbound, setSoulbound] = React.useState(false);

  const onChangeInput = (event) => {
    setMintInformation({
      ...mintInformation,
      [event.target.name]: event.target.value,
    });
  };

  const handleNFT = () => {
    setNFT(!nft);
  };

  const handleSoulbound = () => {
    setSoulbound(!soulbound);
  };

  return (
    <div>
      <Title type="secondary"></Title>
      <div className="grid grid-cols-1 gap-2 mx-10">
        <UserInput
          className=""
          placeholder="YOUR NAMEEEE"
          name="name"
          onChange={onChangeInput}
        />
        <UserInput
          className=""
          placeholder="Limit: [Leave empty if you don't want to set a limit.]"
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
        <div class="form-group text-[white] font-raleway text-xl justify-between flex mx-14">
          <label>
            <input type="radio" checked={nft} onChange={handleNFT}/> NFT (Non-Fungible Token)     
          </label>
          <label>
            <input type="radio" checked={soulbound} onChange={handleSoulbound}/> Soulbound Token  
          </label>
        </div>
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
