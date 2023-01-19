import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import AuthModal from '../AuthModal/AuthModal';

const RequireWeb3Auth = ({ children }) => {
  const [provider, setProvider] = useState(null);

  useEffect(() => {
    window.sessionStorage.clear();
    window.indexedDB.deleteDatabase("auth-client-db");
  });

  const onConnect = (activeProvider) => {
    console.log(activeProvider);
    window.localStorage.setItem("principal", activeProvider.principal);
    setProvider(activeProvider);
  }

  if (provider == null) {
    return (
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <AuthModal onConnect={onConnect}/>
      </div>
    )
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
