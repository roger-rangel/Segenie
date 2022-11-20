import styles from './Button.module.scss';
import {classnames} from 'tailwindcss-classnames';
import PropTypes from 'prop-types';

const Button = ({
  label,
  Icon,
  fill = 'opaque',
  order = 'normal',
  isDisabled = false,
  type = 'button',
  onClick,
}) => {
  return (
    <button
      className={classnames(styles.button, styles[fill], styles[order])}
      disabled={isDisabled}
      type={type}
      onClick={onClick}
    >
      <span className={classnames(styles.label, styles[fill])}>{label}</span>
      <Icon height="24px" />
    </button>
  );
};

export const propTypes = {
  label: PropTypes.string.isRequired,
  Icon: PropTypes.object.isRequired,
  fill: PropTypes.oneOf(['opaque', 'transparent']),
  order: PropTypes.oneOf(['normal', 'reverse']),
  isDisabled: PropTypes.bool, 
  type: PropTypes.oneOf(['button', 'submit']),
  onClick: PropTypes.func,
};

Button.propTypes = propTypes;

export default Button;