import React from 'react';
import Modal from 'react-modal';
import {onGoogleClick} from './LoginFunctions';
import googleSignin from './googleSignin.png';

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
  		if(this.props.openModal){
  			this.setState({ showModal: true });
  		}
   }
  
  render () {
    return (
      <div>
        <Modal 
           isOpen={this.state.showModal}
           contentLabel="Minimal Modal Example"
           style={customStyles}
        >
          <div className='pa4' style={{width:'400px', display:'flex', justifyContent:'center', flexDirection:'column', textAlign:'center'}}>
	          <h2>Sign In with google to unlock this option</h2>
	          <img alt='googlesignin' src={googleSignin} style={{width:'200px', marginLeft:'auto', marginRight:'auto'}} onClick={() => {onGoogleClick('login')}} className="grow pointer mt3"/>
	          <div className='pointer b grow mt3' onClick={this.handleCloseModal}>Sign in later</div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default LoginModal;