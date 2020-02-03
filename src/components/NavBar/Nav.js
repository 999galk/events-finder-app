import React from 'react';

const Nav = ({onRouteChange, isSignedIn}) => {
		return(
			<nav className='shadow-5' style={{display:'flex', justifyContent:'flex-start'}}>
			<p onClick={() => onRouteChange('/home')} className='f3 link dim black underline pa3 ma0 pointer'>Home</p>
			{
				isSignedIn
				?<p style={{marginLeft: 'auto'}} onClick={() => {onRouteChange('/signout');}} className='f3 ma0 link dim black underline pa3 pointer'>Sign Out</p>
				:<div style={{marginLeft: 'auto', display:'flex'}}>
				<p onClick={() => onRouteChange('/signin')} className='f3 ma0 link dim black underline pa3 pointer'>Sign In</p>
				<p onClick={() => onRouteChange('/register')} className='f3 link dim black underline pa3 ma0 pointer'>Register</p>
				</div>
			}
			</nav>
		)
}

export default Nav;