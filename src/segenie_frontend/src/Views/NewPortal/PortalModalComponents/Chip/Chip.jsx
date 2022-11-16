import PropTypes from 'prop-types';

const Chip = ({ children }) => {
  return (
    <div className="py-4 px-3 bg-[#fafafa] rounded-xl">
      <span className="text-transparent font-poppins font-semibold text-xs bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">{children}</span>
    </div>
  );
};

Chip.propTypes = {
  children: PropTypes.node,
};

export default Chip;
