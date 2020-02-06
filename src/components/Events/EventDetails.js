import React from 'react';
import LoginModal from '../Login/LoginModal';

class EventDetails extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			openModal : false
		}}

	handleGoogleClick = () => {
		console.log('recognized click');
		if(this.props.isSignedIn){
			console.log('firxt if');
			this.props.SaveSearch();
		}else {
			console.log('else');
			this.setState({openModal:true});
		}
	}	

	render(){
		const {eventImg,eventId, eventLink, eventTitle, eventClicked,limit, sale} = this.props;
		const {openModal} = this.state;
		return(
			<div id='details' className='dib br3 pa2 ma4 bw2 mw5 mw7-ns' style={{display:'flex', justifyContent:'center', flexDirection:'column'}}>
				<div id={eventId} className='pa3 ph5-ns bg-black ma2 br4'>
					<div style={{display:'flex', justifyContent:'center', alignItems:'center', flexWrap:'wrap'}}>
					{
						eventClicked
						?<div className='white ma3' style={{maxWidth:'60%'}}>
							<h3 className='mw5 center'>{eventTitle}</h3>
							<p> Sales start at {sale}</p>
							{
								limit
								? <p>{limit.info}</p>
								: <p></p>
							}
						</div>
						: <div></div>
					}
						<div className='pa3'>
							<img src={eventImg} alt='eventImg' style={{width:'250px'}}/>
						</div>
					</div>
					<a href={eventLink} className='ma2 mt3 f3 white db' target="_blank" rel="noopener noreferrer">Order Tickets Now!</a>
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