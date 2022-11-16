import {classnames} from 'tailwindcss-classnames';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';

const Link = ({ to, className, children }) => {
  return (
    <RouterLink to={to} className={classnames('no-underline', className)}>
      {children}
    </RouterLink>
  );
};

Link.propTypes = {
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Link;