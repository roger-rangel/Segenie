import { useContext } from 'react';
import { Web3Context } from '../Context/Web3Context';

const useWeb3Identity = () => {
  const accessWeb3 = useContext(Web3Context);

  return accessWeb3;
};

export default useWeb3Identity;
