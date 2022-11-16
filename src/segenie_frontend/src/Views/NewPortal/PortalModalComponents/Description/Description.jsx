import PropTypes from 'prop-types';
import {classnames} from 'tailwindcss-classnames';

const stylesDescription = classnames('font-raleway text-base text-left text-[#e6e6e6]');

const Description = ({ className: additonalClassName, children }) => {
  return (
    <p className={classnames(stylesDescription, additonalClassName)}>
      {children}
    </p>
  );
};

Description.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Description;
