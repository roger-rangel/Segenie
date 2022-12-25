import React, {useState} from 'react';
import PropTypes from 'prop-types';
import AuthModal from '../AuthModal/AuthModal';

const RequireWeb3Auth = ({ children }) => {
  const [provider, setProvider] = useState(null);

  const onConnect = (activeProvider) => {
    console.log(activeProvider);
    setProvider(activeProvider);
  }

  if (provider == null) {
    return <AuthModal onConnect={onConnect}/>
  }

  const childrenWithProps = React.Children.map(children, child => {
    if(React.isValidElement(child)) {
      return React.cloneElement(child, { provider });
    }
    return child;
  });

  return <div>{childrenWithProps}</div>
};

RequireWeb3Auth.propTypes = {
  children: PropTypes.node,
};

export default RequireWeb3Auth;
