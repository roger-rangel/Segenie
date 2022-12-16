import PropTypes from 'prop-types';

const Layer = ({ children }) => {
  return (
    <div className="fixed inset-0 bg-[rgba(0, 0, 0, 0.6)]">{children}</div>
  );
};

Layer.propTypes = {
  children: PropTypes.node,
};

export default Layer;
