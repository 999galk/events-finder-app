import React from 'react';
import './Header.css'; 
import SearchBar from '../SearchBar/SearchBar';


const Header = ({onRouteChange, isSignedIn, userId, onSearchChange, calChanged}) => {
	return (
		<header >
			<div className='header-container'>
			<h1 className='title'>TAKE A DEEP BREATH</h1>
			<SearchBar userId={userId} onSearchChange={onSearchChange} calChanged={calChanged}/>
			</div>			
	    </header>
	);
}

export default Header;