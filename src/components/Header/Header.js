import React from 'react';
import './Header.css'; 
import SearchBar from '../SearchBar/SearchBar';


const Header = ({onRouteChange, isSignedIn, userId, onSearchChange, calChanged}) => {
	return (
		<header >
			<div className='background-image-container'>
			<SearchBar userId={userId} onSearchChange={onSearchChange} calChanged={calChanged}/>
			</div>			
	    </header>
	);
}

export default Header;