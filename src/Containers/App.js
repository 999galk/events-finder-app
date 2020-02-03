import React from 'react';
import SignIn from '../components/Login/SignIn';
import Register from '../components/Login/Register';
import Header from '../components/Header/Header';
import Nav from '../components/NavBar/Nav';
import EventsCalendar from '../components/Calendar/EventsCalendar';
import Recomendations from '../components/Reco/Recomendations';
import Footer from '../components/Footer/Footer'
import './App.css';


class App extends React.Component{
  constructor(){
    super()
    this.state = {  
      route : '/home',
      isSignedIn : false,
      userId : '',
      calChanged : false,
      city : '',
      countryCode : ''
    }
  }
  
  onRouteChange = (route) => {
      if(route === '/signout'){
        this.setState({isSignedIn: false}, this.setState({route: '/signin'}));
      } else if(route === '/home') {
        this.setState({calChanged : false}, this.setState({route: route}));
      } else{
        this.setState({route: route});
      }
  }

  onSearchChange = (calChanged, city, countryCode) => {
    this.setState({calChanged : calChanged, city : city, countryCode : countryCode});
    return true;
  }

  onBackButtonEvent = (event) => {
    event.preventDefault();
   this.onRouteChange('/home');
  }

  componentDidMount(){
    const myUrl = window.location.href; 
    if (myUrl.includes("profile")){
      const urlSeg = myUrl.split('/');
      const id = urlSeg[urlSeg.length-1];
      this.setState({isSignedIn : true, userId : id}, this.setState({route: '/home'}));
    }
    window.onpopstate = this.onBackButtonEvent;
  }

  render () {
    const {route, isSignedIn, userId, city, countryCode, calChanged } = this.state;
    return (
      <div className="App" style={{display:'flex', flexDirection:'column',justifyContent:'space-between'}}>
        <Nav onRouteChange={this.onRouteChange} isSignedIn={isSignedIn}/>
        {route ==='/home'
          ?<div>
          <Header onRouteChange={this.onRouteChange} isSignedIn={isSignedIn} userId={userId} onSearchChange={this.onSearchChange} calChanged={calChanged}/>
          {
            calChanged
            ?<EventsCalendar city={city} countryCode={countryCode} isSignedIn={isSignedIn} userId={userId} onBackButtonEvent={this.onBackButtonEvent} calChanged={calChanged} onRouteChange={this.onRouteChange}/> 
            :<Recomendations onSearchChange={this.onSearchChange}/> 
          }
          </div>
          : (route === '/signin'
              ? <SignIn onRouteChange={this.onRouteChange} onBackButtonEvent={this.onBackButtonEvent}/>
              : ( route === '/register'
                ? <Register onRouteChange={this.onRouteChange} onBackButtonEvent={this.onBackButtonEvent}/>
                : <div>No route found</div>
                )
            )
        }
        <Footer />
      </div>
    );
  }
}

export default App;
