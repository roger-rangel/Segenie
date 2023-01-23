import React, {useEffect} from "react";
import Modal from 'react-modal';

import mixpanel from "mixpanel-browser";
import RequireWeb3Auth from '../../Web3Authorization/RequireWeb3Auth/RequireWeb3Auth';

import RedPortal from '../Buildspace/RedPortal'
import BluePortal from '../Buildspace/BluePortal'
import GreenPortal from '../Buildspace/GreenPortal'
import YellowPortal from '../Buildspace/YellowPortal'
import PurplePortal from '../Buildspace/PurplePortal'

mixpanel.init(process.env.MIXPANEL);

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      backgroundColor: 'transparent',
      border: 'none',
      transform: 'translate(-50%, -50%)',
    
    },
    overlay: {
        background: 'rgba(255, 255, 255, 0.20)',
    }
  };

Modal.setAppElement(document.getElementById('root'));

const ClaimPortal = ({color, claim, setClaim}) => {
  useEffect(() => {
    mixpanel.track("Claim claimed");
  }, []);

  function closeClaim() {
    setClaim(false);
  }

  return (
    <div className="bg-opacity-50">
      <Modal
        isOpen={claim}
        onRequestClose={closeClaim}
        style={customStyles}
        contentLabel="Example Claim"
      >
        <div className="bg-gradient-to-r from-[#C0F449] via-[#7EF188] to-[#00EBFF] scale-75 rounded-[2.25rem] p-2">
        <div class=" h-full w-full bg-[#293241] rounded-[2rem]">
        {(() => {
        switch (color) {
          case 'blue':
            return (
            <RequireWeb3Auth>
              <BluePortal />
            </RequireWeb3Auth>
            )
          case 'yellow':
            return (
            <RequireWeb3Auth>
              <YellowPortal />
            </RequireWeb3Auth>
            )
          case 'red':
            return (
            <RequireWeb3Auth>
              <RedPortal />
            </RequireWeb3Auth>
            )
          case 'green':
            return (
            <RequireWeb3Auth>
              <GreenPortal />
            </RequireWeb3Auth>
            )
          default:
            return null
        }
        })()}
        </div>
        </div>
      </Modal>
    </div>
  );
}

export default ClaimPortal;