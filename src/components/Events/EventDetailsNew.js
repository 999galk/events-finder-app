import React from 'react';
import './EventDetails.css';
import LoginModal from '../Login/LoginModal';
import EventsModal from './EventsModal';
 

class EventDetails extends React.Component{
	constructor(props){
		console.log('constructor');
		super(props);
		this.state = {
			openModal : false
		}
	}

	handleGoogleClick = () => {
		if(this.props.isSignedIn){
			this.props.SaveSearch();
		}else {
			this.setState({openModal:true});
		}
	}	

	render(){
		console.log('render');
		const {eventImg,eventId, eventLink, eventTitle, eventClicked,limit, sale} = this.props;
		const {openModal} = this.state;
		console.log('state:', this.state);
		return(
			<div id='details' className='dib br3 pa2 ma4 bw2 mw5 mw7-ns' style={{display:'flex', justifyContent:'center', flexDirection:'column'}}>
				<div id={eventId} className='ph5-ns ma2 details-items'>
					<div style={{display:'flex', justifyContent:'center', alignItems:'center', flexWrap:'wrap'}}>
					<div className='pa3'>
						<img src={eventImg} alt='eventImg' style={{width:'250px'}}/>
					</div>
					{
						eventClicked
						?<EventsModal>
				        <div id={eventId} className='ph5-ns ma2 details-items'>
						<div style={{display:'flex', justifyContent:'center', alignItems:'center', flexWrap:'wrap'}}>
						<div className='pa3'>
							<img src={eventImg} alt='eventImg' style={{width:'250px'}}/>
						</div>
						<div id='infoText' className='black ma3'>
						<button onClick={this.closeModal}>close</button>
							<h3 className='mw5 center'>{eventTitle}</h3>
							{
								sale.startDateTime
								? <p>Sale start at {sale.startDateTime.split('T')[0]}</p>
								: <p> Sale start TBD</p>
							}
							{
								limit
								? <p>{limit.info}</p>
								: <p></p>
							}
						</div>
						</div></div>
						</EventsModal>
						: <div></div>
					}
					</div>
					<a href={eventLink} className='ma2 mt3 f3 black db' target="_blank" rel="noopener noreferrer">Order Tickets Now!</a>
					{
						eventClicked
						? <div id="buttonDiv">
						<img className='pointer mt3' onClick={this.handleGoogleClick} title="Add this event to my Google Calendar" alt="googleCal" src="https://d14f1v6bh52agh.cloudfront.net/oS578Mo8psy93c5uRIvpia1L5EU=/fit-in/1400xorig/uploads/zn6V8AMIh9RbHP5oxNmcUsbHRbR2W4NUSuuC28wr.jpeg" style={{width:'150px'}}/>
						{
							openModal
							? <LoginModal/>
							:<div></div>
						}
						</div>
						:<div></div>
					}
				</div>
			</div>
		)
}
}

export default EventDetails;