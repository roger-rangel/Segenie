import React from 'react';
import PropTypes from 'prop-types';
import styles from './Wrapper.module.scss';

const Wrapper = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

Wrapper.propTypes = {
  children: PropTypes.node,
};

export default Wrapper;
