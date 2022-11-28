import React from 'react';
import TextInput from '../TextInput/TextInput';
import Heading from '../Heading/Heading';
import PropTypes from 'prop-types';

const NewPortalSecondModalBody = ({ mintInformation, setMintInformation }) => {
  const onChangeInput = (event) => {
    setMintInformation({
      ...mintInformation,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <Heading type="secondary">General</Heading>
      {/* TODO: ADD THIS CSS BELOW */}
      {/* grid-template-areas:
        'textInput1 textInput2'
        'textArea textArea'; */}
      <div className="grid grid-cols-1 gap-2">
        <TextInput placeholder="Name" name="name" onChange={onChangeInput} />
        <textarea
        //TODO: ADD THIS BELOW WITH TAILWIND CSS ===>  grid-area: textArea;
          className="py-2 px-4 bg-[#fafafa] rounded font-raleway text-base 
                    border-none resize-none placeholder:text-[#b1b1b1]"
          rows="5"
          placeholder="Description"
          name="description"
          onChange={onChangeInput}
        />
      </div>
    </div>
  );
};

export const mintInformationPropTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

NewPortalSecondModalBody.propTypes = {
  mintInformation: PropTypes.exact(mintInformationPropTypes).isRequired,
  setMintInformation: PropTypes.func.isRequired,
};

export default NewPortalSecondModalBody;