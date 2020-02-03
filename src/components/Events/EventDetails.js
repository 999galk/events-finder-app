import React from 'react';

const EventDetails = ({ eventImg, eventLink, eventTitle, eventClicked, SaveSearch, isSignedIn, onRouteChange}) => {
	return(
		<div id='details' className='tc dib br3 pa2 ma4 bw2 mw5 mw7-ns' style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
			<div id='eventDetails' className='center pa3 ph5-ns'>
				<h3 className='mw5 center'>{eventTitle}</h3>
				<img src={eventImg} alt='eventImg' style={{width:'350px', height:'250px', display:'block'}}/>
				<a href={eventLink} className='ma2 mt3 f3 white db' target="_blank" rel="noopener noreferrer">Order Tickets Now!</a>
			{
				(isSignedIn && eventClicked)
				?<div id='buttonDiv' className='mt3'>
					<img className='pointer' onClick={SaveSearch} title="Add this event to my Google Calendar" alt="googleCal" src="https://d14f1v6bh52agh.cloudfront.net/oS578Mo8psy93c5uRIvpia1L5EU=/fit-in/1400xorig/uploads/zn6V8AMIh9RbHP5oxNmcUsbHRbR2W4NUSuuC28wr.jpeg" style={{width:'150px'}}/>
				</div>
				: ( eventClicked
					? <div onClick={() => onRouteChange('/signin')} className='pointer mt2 grow'>Sign in to add events to your Google Calendar</div>
					:<div></div>
				)
			}
			</div>
		</div>
	)
}

export default EventDetails;