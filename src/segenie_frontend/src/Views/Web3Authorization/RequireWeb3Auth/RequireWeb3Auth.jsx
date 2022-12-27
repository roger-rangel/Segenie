import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import AuthModal from '../AuthModal/AuthModal';
import MainWrapper from '../../../components/MainWrapper/MainWrapper';

const RequireWeb3Auth = ({ children }) => {
  const [provider, setProvider] = useState(null);

  useEffect(() => {
    window.localStorage.clear();
    window.sessionStorage.clear();
    window.indexedDB.deleteDatabase("auth-client-db");
  });

  const onConnect = (activeProvider) => {
    console.log(activeProvider);
    setProvider(activeProvider);
  }

  if (provider == null) {
    return (
      <MainWrapper>
        <AuthModal onConnect={onConnect}/>
      </MainWrapper>
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
