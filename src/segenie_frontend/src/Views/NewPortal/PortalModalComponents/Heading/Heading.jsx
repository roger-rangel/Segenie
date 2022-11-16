import PropTypes from 'prop-types';

const Heading = ({ type = 'primary', children }) => {
  switch (type) {
    case 'primary':
      return (
        <h1 className="font-poppins text-[#fafafa] mb-3 text-3xl leading-tight font-bold">
          {children}
        </h1>
      );
    case 'secondary':
      return (
        <h2 className="font-poppins text-[#fafafa] mb-3 text-2xl leading-tight font-bold">
          {children}
        </h2>
      );
    case 'tertiary':
      return (
        <h3 className="font-poppins text-[#fafafa] mb-3 text-xl leading-tight font-bold">
          {children}
        </h3>
      );
    default:
      return null;
  }
};

Heading.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  children: PropTypes.node,
};

export default Heading;