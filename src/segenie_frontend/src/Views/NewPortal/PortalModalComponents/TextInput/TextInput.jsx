import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({
  value,
  placeholder,
  name,
  isRequired,
  type = 'text',
  onChange,
}) => {
  return (
    <input
      className="py-2 px-4 bg-[#080808] rounded font-raleway text-xl  border-none placeholder:text-[#19E7AB] text-[#19E7AB]"
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      required={isRequired}
      onChange={onChange}
    />
  );
};

TextInput.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  isRequired: PropTypes.bool,
  type: PropTypes.string,
  onChange: PropTypes.func,
};

export default TextInput;
