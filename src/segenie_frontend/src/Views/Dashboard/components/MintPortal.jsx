import React from "react";
import Modal from 'react-modal';
import Portal from '../../NewPortal/NewPortal'

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

const MintPortal = ({portal, setPortal, provider}) => {

  function closePortal() {
    setPortal(false);
  }


  return (
    <div className="bg-opacity-50">
      <Modal
        isOpen={portal}
        onRequestClose={closePortal}
        style={customStyles}
        contentLabel="Example Portal"
      >
        <Portal provider={provider}/>
      </Modal>
    </div>
  );
}

export default MintPortal;