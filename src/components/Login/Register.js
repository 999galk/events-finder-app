import React from 'react';
import googleSignin from './googleSignin.png';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: ''
    }
  }

  onNameChange = (event) => {
    this.setState({name: event.target.value})
  }

  onEmailChange = (event) => {
    this.setState({email: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  }

  onSubmitRegister = () => {
    fetch('https://fierce-bastion-22088.herokuapp.com/register/onSite', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name
      })
    })
      .then(response => response.json())
      .then(user => {
        console.log(user.id);
          if (user.id) {
            const profileUrl = '/profile/' + user.id;
            window.location.pathname = profileUrl;
          } else {
            const passDiv = document.getElementById('password');
            const error = document.createElement('p');
            error.textContent = 'Invalid User/Password';
            error.className = 'red';
            passDiv.appendChild(error);
          }
        })
  }

  onGoogleRegister =() =>{
    fetch('https://fierce-bastion-22088.herokuapp.com/googleAuth/register')
    .then(res => res.json())
    .then(data => {
      console.log(data.url);
      window.location.replace(data.url);
    });
  } 

  componentDidMount(){
    window.onpopstate = this.props.onBackButtonEvent; 
  }

  render() {
    return (
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center bg-white">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Sign Up</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="name"
                  id="name"
                  onChange={this.onNameChange}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}
                />
              </div>
              <div className="mv3" id="password">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange}
                />
              </div>
            </fieldset>
            <div className="">
              <input
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Sign Up"
                onClick={this.onSubmitRegister}
              />
              <div className="pa3">
            <p className="b ma0">OR</p>
              <img alt='googlesignin' src={googleSignin} style={{width:'50%'}} onClick={this.onGoogleClick} className="grow pointer mt3"/>
            </div>
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default Register;