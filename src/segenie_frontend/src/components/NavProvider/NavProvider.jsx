import React from 'react';
import { useState } from 'react';
import NavContext from '../../Context/NavContext';
import PropTypes from 'prop-types';

const NavProvider = ({ children }) => {
  const [nav, setNav] = useState(false);

  const value = { nav, setNav };

  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
};

NavProvider.propTypes = {
  children: PropTypes.node,
};

export default NavProvider;
