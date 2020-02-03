import React from 'react';
import { CountryDropdown } from 'react-country-region-selector';
import { getCode } from 'country-list';
import { mainCities } from '../MainCities';
import './SearchBar.css';

const initialState = {
	country : '',
	countryCode : '',
	city : '',
	cityList : [],
	period : '',
	calChanged : false,
	supportedCountryCode : ["US", "AT", "BE", "CA", "DK", "FI", "GB", "IE", "LU", "MX", "NL", "NZ", "NO", "ES", "SE", "CH", "AE"]
}

class SearchBar extends React.Component {
	constructor(props){
		super(props)
		this.state = initialState;
	}

	onCountryChange (val) {
		const select = document.getElementById('citySelector');
		const ifClean = new Promise((resolve,reject) => {
			console.log('got into promise');
			resolve(this.removeCities(select));
		});
		ifClean.then(value => {
			console.log('starting then after promise');
	    	this.setState({ country: val },this.getCountryCode);
		})
	}


	getCountryCode = () => {
		const countryName = this.state.country;
		if(countryName === 'United States'){
			this.setState({countryCode : 'US'}, this.getCitiesOfCountry);
		}else if(countryName === 'United Kingdom'){
			this.setState({countryCode : 'GB'}, this.getCitiesOfCountry);
		}else{
			this.setState({countryCode : getCode(countryName)}, this.getCitiesOfCountry);
		}
	}

	getCitiesOfCountry = () => {
		const obj = mainCities.filter(country => country.countryCode === this.state.countryCode);
		console.log('obj.cities from cities file:', obj[0].cities);
		this.setState({cityList : obj[0].cities}, this.updateCityOptions);
	}

	updateCityOptions = () => {
		const cities = this.state.cityList;
		let select = document.getElementById('citySelector');
		if(select.childElementCount){
			this.removeCities(select);
		}
	    cities.forEach(city => {
	    	let op = document.createElement('option');
	    	op.textContent = city;
	    	op.value = city;
	    	select.appendChild(op);
	    	}, this.setState({city : cities[0]}))  
	}

	onCityChange = () => {
		const select = document.getElementById('citySelector');
		const val = select.value;
		if(this.state.calChanged){
			const changed = new Promise((resolve,reject) => {
				resolve(this.props.onSearchChange(false, val, ''));
			});
			changed.then(value => this.props.onSearchChange(true, val, this.state.countryCode));
		}else{
			this.props.onSearchChange(true, val, this.state.countryCode);
			this.setState({calChanged:true});
		}
  	}

	removeCities = (select) => {
		console.log('starting remove cities, children:',select.childElementCount);
		const run = select.childElementCount;
		for(let i=0; i<run;i++){
			select.children[0].remove();
		}
		return true;
	}
	
	componentDidMount() {
		this.forceUpdate();
  	}


  	render(){
  		const {country, supportedCountryCode} = this.state;
		return (
			<div className='pa5' style={{paddingRight:'6rem', paddingLeft:'5rem'}}>
				<h1> Where are you traveling to?</h1>
				<div id='bar' className='br3 pa5 ma3 ml5 mr5 shadow-5' style={{display:'flex', justifyContent:'center', flexWrap: 'wrap'}}>
					<div>
					<CountryDropdown
					className='pa3 ba br3 b--blue bg-lightest-blue ma2 mw5'
			          value={country}
			          onChange={(val) => this.onCountryChange(val)}
			          whitelist={supportedCountryCode}
			          />
			         </div>
					<div id='cities'>
						<select id='citySelector' className='pa3 ba br3 b--blue bg-lightest-blue ma2 mw5' onChange={this.onCityChange}>
							<option value>Select City</option>
						</select>
					</div>
				</div>
			</div>
		);
	}
}

export default SearchBar;