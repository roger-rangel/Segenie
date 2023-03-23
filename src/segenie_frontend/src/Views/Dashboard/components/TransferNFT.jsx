/* eslint-disable no-unused-vars */
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
      borderColor: 'white',
      transform: 'translate(-50%, -50%)',
    },
    overlay: {
        background: 'rgba(255, 255, 255, 0.20)',
    }
  };

Modal.setAppElement(document.getElementById('root'));

const TransferNFT = ({provider, transferPortal, setTransferPortal, portalId}) => {
  function closeModal() {
    setTransferPortal(false);
  }

  return (
    <div className="bg-opacity-50">
      <Modal
        isOpen={transferPortal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        portalId={portalId}
      >
      <TransferModal provider={provider} closeModal={closeModal} portalId={portalId}/>
      </Modal>
    </div>
  )
}

const TransferModal = ({provider, closeModal, portalId}) => {
  useEffect(() => {
    mixpanel.track("TransferNFT Modal Opened");
  }, [])

  const [receiver, setReceiver] = useState("");

  const { transferPortal } = useNewPortal();

  async function transfer() {
    console.log("Portal id: " + portalId);
    const res = await transferPortal(provider, portalId, receiver);
    alert(res);
  }

  return (
    <div className="bg-opacity-50">
    <form className=''>
      <img className="w-80 rounded m-auto" src={'/img/music_banner.png'} alt={''}/>
      <div className="flex flex-col mt-4">
        <div>
            <input 
              className='bg-gradient-to-r from-[#a855f7] to-[#3b82f6] align-middle text-center rounded placeholder-[#475569] pl-10' 
              placeholder="Send To"
              value={receiver} 
              onChange={(e) => setReceiver(e.target.value)}
            />
            <span
              className='bg-gradient-to-r from-[#a855f7] to-[#3b82f6] rounded placeholder-[#475569] mb-4 ml-2 align-middle text-center px-8 py-1 border-[white] border-2'>
                Wallet
            </span>
        </div>
      </div>
    </form>
    <button className={'w-full py-4 rounded bg-gradient-to-r from-[#a855f7] to-[#3b82f6] hover:from-[#4ade80] hover:to-[#3b82f6] text-[white] mt-6 mb-5 '} onClick={transfer}>Transfer</button>
    <button className={'w-full py-2 rounded bg-gradient-to-r from-[#f12711] to-[#f5af19] text-[white]'} onClick={closeModal}>close</button>
    </div>
  );
}

export default TransferNFT;