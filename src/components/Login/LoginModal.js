import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement(document.getElementById('App'));

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class LoginModal extends React.Component {
  constructor () {
    super();
    this.state = {
      showModal: false
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }

  componentWillMount() {
  		var that = this;
        setTimeout(function() {
            that.setState({ showModal: true });
        }, that.props.wait);
   }
  
  render () {
    return (
      <div>
        <Modal 
           isOpen={this.state.showModal}
           contentLabel="Minimal Modal Example"
           style={customStyles}
        >
          <div style={{width:'400px'}}>
          bla bla
          </div>
          <div className='pointer' onClick={this.handleCloseModal}>Sign in later</div>

        </Modal>
      </div>
    );
  }
}

export default LoginModal;