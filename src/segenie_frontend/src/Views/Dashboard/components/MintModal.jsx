import React, { useState, useEffect } from "react";
import Modal from 'react-modal';
import useNewPortal from '../../../Hooks/useNewPortal';
import mixpanel from "mixpanel-browser";
import RequireWeb3Auth from '../../Web3Authorization/RequireWeb3Auth/RequireWeb3Auth';

mixpanel.init(process.env.MIXPANEL);

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      backgroundColor: '#212534',
      borderColor: '#ec38bc',
      transform: 'translate(-50%, -50%)',
    },
    overlay: {
        background: 'rgba(255, 255, 255, 0.20)',
    }
  };

Modal.setAppElement(document.getElementById('root'));

const MintModalWrapper = ({modal, setModal, provider}) => {
  function closeModal() {
    setModal(false);
  }

  return (
    <div className="bg-opacity-50">
      <Modal
        isOpen={modal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
      <MintModal closeModal={closeModal} provider={provider}/>
      </Modal>
    </div>
  )
}

const MintModal = ({provider, closeModal}) => {
  useEffect(() => {
    mixpanel.track("Mint Modal Opened");
  }, [])

  const [portalId, setPortalId] = useState(0);
  const [receiver, setReceiver] = useState("");

  const { mintPortal } = useNewPortal();

  async function mint() {
    const res = await mintPortal(provider, portalId, receiver);
    alert(res);
  }

  return (
    <div className="bg-opacity-50">
    <form className=''>
      <img className=" w-80 rounded" src={'/img/portalmint.png'} alt={''}/>
      <div className="flex flex-col mt-4">
        <div>
            <input 
              className='bg-gradient-to-r from-[#FEAC5E] via-[#C779D0] to-[#4BC0C8] rounded placeholder-[#475569] pl-10 mb-4' 
              placeholder="Enter Portal ID" 
              value={portalId} 
              onChange={(e) => setPortalId(e.target.value)}
            />
            <span
              className='bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#4BC0C8] rounded placeholder-[#475569] mb-4 ml-2 align-middle text-center px-6 py-1 border-[#8A2387] border-2'>
                Portal ID
            </span>
        </div>
        <div>
            <input 
              className='bg-gradient-to-r from-[#FEAC5E] via-[#C779D0] to-[#4BC0C8] rounded placeholder-[#475569] pl-10' 
              placeholder="Send To"
              value={receiver} 
              onChange={(e) => setReceiver(e.target.value)}
            />
            <span
              className='bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#4BC0C8] rounded placeholder-[#475569] mb-4 ml-2 align-middle text-center px-8 py-1 border-[#8A2387] border-2'>
                Wallet
            </span>
        </div>
      </div>
    </form>
    <button className={'w-full py-4 rounded bg-gradient-to-r from-[#8A2387] via-[#E94057] to-[#F27121] text-[#ffdde1] mt-6 mb-5 '} onClick={mint}>Mint</button>
    <button className={'w-full py-2 rounded bg-gradient-to-r from-[#c31432] to-[#240b36] text-[#ffdde1]'} onClick={closeModal}>close</button>
    </div>
  );
}

export default MintModalWrapper;
