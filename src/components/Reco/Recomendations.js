import React from 'react';

const Recomendations = ({onSearchChange}) => {
	return(
		<div className='mt5 mb3'>
			<h1>Recomended for you:</h1>
			<div className='shadow-5' style={{display:'flex', justifyContent:'center', flexWrap:'wrap'}}>
				<div className='grow br3 ma3 dib bw2 shadow-5 pointer'>
					<div className='relative' onClick={() => onSearchChange(true, 'New York', 'US')}>
	      				<img className='br3' alt='Travel' src="https://content.skyscnr.com/b62fd4346123d1eb9f7525c8f72f2a8a/stock-photo-new-york-city-at-twilight-128894587.jpg?resize=400px:400px" width='550px' height='450px'/>
	      				<div className='br3 absolute bottom-0 left-0 h-25 bg-black w-100'>
	      					<div className='b white f3 mt4'>
	    					New York, NY, <span className='f4'>United States</span>
		  					</div>
		      				<div className='f4 mt2 pointer' style={{color:'#ff884d'}}>
		      				Get Events >
		      				</div>
		      			</div>
	      			</div>
	    		</div>
	    		<div className='tc grow br3 ma3 dib bw2 shadow-5 pointer'>
					<div className='relative' onClick={() => onSearchChange(true, 'Stockholm', 'SE')}>
	      				<img className='br3' alt='Travel' src="https://stacieflinner.com/wp-content/uploads/2017/12/Stacie-Flinner-Christmas-in-Stockholm-23.jpg?auto=webp&format=pjpg&quality=80&width=640&height=720&fit=crop" width='300px' height='450px'/>
	      				<div className='br3 absolute bottom-0 left-0 h-25 bg-black w-100'>
	      					<div className='b white f3 mt4'>
	    					Stockholm, <span className='f4'>Sweden</span>
		  					</div>
		      				<div className='f4 mt2 pointer' style={{color:'#ff884d'}}>
		      				Get Events >
		      				</div>
		      			</div>
	      			</div>
	    		</div>
	    		<div className='tc grow br3 ma3 dib bw2 shadow-5 pointer'>
					<div className='relative' onClick={() => onSearchChange(true, 'Auckland', 'NZ')}>
	      				<img className='br3' alt='Travel' src="https://resources.nzft.co.nz/c/h/d/site_files/uploads/funkychicken/south-island-new-zealand-tours576x576__w570_w.jpg?auto=webp&format=pjpg&quality=80&width=640&height=720&fit=crop" width='300px' height='450px'/>
	      				<div className='br3 absolute bottom-0 left-0 h-25 bg-black w-100'>
	      					<div className='b white f3 mt4'>
	    					Auckland, <span className='f4'>New Zealand</span>
		  					</div>
		      				<div className='f4 mt2 pointer' style={{color:'#ff884d'}}>
		      				Get Events >
		      				</div>
		      			</div>
	      			</div>
	    		</div>
			</div>
		</div>
	);
}

export default Recomendations;