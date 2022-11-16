import PropTypes from 'prop-types';
import {classnames} from 'tailwindcss-classnames';

const fourByThree = classnames('pt-[75%]');
const oneByOne = classnames('pt-[100%]');

const AspectRatio = ({ ratio, children }) => {
  return (
    <div
      className={classnames('relative', ratio)}
    >
      <div className="absolute inset-0">{children}</div>
    </div>
  );
};

AspectRatio.propTypes = {
  ratio: PropTypes.oneOf(['fourByThree', 'oneByOne']).isRequired,
  children: PropTypes.node,
};

export default AspectRatio;