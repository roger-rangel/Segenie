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
      className="py-2 px-4 bg-[#fafafa] rounded font-raleway text-base border-none placeholder:text-[#b1b1b1]"
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
