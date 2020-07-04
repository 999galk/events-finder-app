import React from 'react';
import './EventDetails.css';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : 'auto',
    left                  : '50%',
    right                 : 'auto',
    bottom                : '10%',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
 
// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

const initState = {
	modalIsOpen: true,
	setIsOpen : true,
	
} 
 
function EventsModal({children}){
  const [modalIsOpen,setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }
 
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }
 
  function closeModal(){
    setIsOpen(false);
  }
 
    return (
      <div>
        <button onClick={openModal}>Open Modal</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          {this.props.children}
        </Modal>
      </div>
    );
}
 
export default EventsModal;