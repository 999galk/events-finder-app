import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/sass/styles.scss';
import '../Calendar.css';
import EventDetails from '../Events/EventDetails';

 
const localizer = momentLocalizer(moment);

class EventsCalendar extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			events : [],
			eventTitle : 'Powered By',
			eventImg : 'https://uk.tmconst.com/ccp-salesforce-images/DK/ticketmaster_guider_720x405.jpg',
			eventLink : 'https://www.ticketmaster.com/',
			eventSalesStart : '',
			eventTicketsLimit : '',
			eventId : '',
			eventClicked : false,
			clickActionsAdded : ''
		}}

	SaveSearch = () => {
		const data = (this.state.events).filter(event => event.id === this.state.eventId);
		fetch('https://fierce-bastion-22088.herokuapp.com/saveSearch', {
	      method: 'post',
	      headers: {'Content-Type': 'application/json'},
	      body: JSON.stringify({
	        user : this.props.userId,
	        eventId : this.state.eventId,
	        eventTitle : this.state.eventTitle,
	        location : `${this.props.city} , ${this.props.countryCode}`,
	        description : `Details: ${this.state.eventLink}`,
	        start : data[0].start,
	        end : data[0].end
	      })
	    })
	      .then(response => response.json())
	      .then(user => {
	      	const btnDiv = document.getElementById('buttonDiv');
	        const msg = document.createElement("p");
	        if (user === this.props.userId) {
	        	msg.textContent = "Event saved to your calendar!";
	        } else{
	        	msg.textContent = "Sign in with Google to unlock this option";
	        }
	        btnDiv.appendChild(msg);
	      })
	}

	getEvents= () => {
		const fetchUrl = 'https://fierce-bastion-22088.herokuapp.com/calendar/' + this.props.countryCode + '/' + this.props.city;
		fetch(fetchUrl)
		.then(res => res.json())
		.then(data => {
			let tempEventsArr = [];
			if(data[Object.keys(data)[0]].events){
				const eventsArr = data[Object.keys(data)[0]].events;
				tempEventsArr = eventsArr.map(event => {
					const startDate = new Date(event.dates.start.dateTime);
					const endDate = new Date(startDate + 1);
					const obj = {
						id : event.id,
						title : event.name,
						start : startDate,
						end : endDate,
						img : event.images[5].url,
						ticketsUrl : event.url,
						sales : event.sales.public,
						limit : event.ticketLimit
					}
					return obj;
				})
			}
			
			this.setState({events : tempEventsArr}, this.addClickFunctions);
		});
	}

	addClickFunctions = () => {
		const eventsClasses = document.querySelectorAll(".rbc-event");
		if(eventsClasses){
			eventsClasses.forEach(div => {
				const selectedEvent = this.getEventObj(div);
				div.addEventListener("click", () => {
					this.setState({eventImg : selectedEvent[0].img, 
								eventLink:selectedEvent[0].ticketsUrl, 
								eventTitle:selectedEvent[0].title,
								eventId : selectedEvent[0].id,
								eventSalesStart : selectedEvent[0].sales,
								eventTicketsLimit : selectedEvent[0].limit,
								eventClicked : true
							}, this.executeScroll);
				});
		})
			this.setState({clickActionsAdded : eventsClasses.length})
		}
	}

	getEventObj = (div) => {
		let title;
		if(div.title){
			title = div.children[1].innerText;
		}else {
			title=div.firstElementChild.title;
		}
		const selectedEvent = (this.state.events).filter(obj => obj.title === title);
		return selectedEvent;
		
	}

	componentDidMount() {
		if(this.props.city){
			this.getEvents();
		}
		const toolBar = document.getElementsByClassName('rbc-toolbar')[0];
		toolBar.addEventListener("click", () => {this.getEvents();});
		const showMore = document.getElementsByClassName('rbc-show-more');
		if(showMore){
			for(let i=0;i<showMore.length;i++){
				showMore[i].addEventListener("click", () => {this.getEvents();})
			}
		}
		window.onpopstate = this.props.onBackButtonEvent;
  	}

  	executeScroll = () => document.getElementById('details').scrollIntoView({behavior: 'smooth'});

	render(){
		const {events, eventImg, eventLink, eventTitle, eventClicked, eventTicketsLimit, eventSalesStart, clickActionsAdded} = this.state;
		const {isSignedIn} = this.props;
		return(
			<div id='calendar' className='pa2 ma2 mb5 shadow-5 mt4' value={clickActionsAdded}>
				<h1 style={{marginTop : '2.5rem', marginBottom : '2rem'}}>
					{`Upcoming Events For ${this.props.city}, ${this.props.countryCode}:`}
				</h1>
			    <Calendar
			      localizer={localizer}
			      events={events}
			      startAccessor="start"
			      endAccessor="end"
			      style={{height: 500}}
			    />
			    <div style={{display:'flex', justifyContent:'center'}} id='details_section'>
		  		<EventDetails eventImg={eventImg} eventLink={eventLink} eventTitle={eventTitle} eventClicked={eventClicked} SaveSearch={this.SaveSearch} isSignedIn={isSignedIn} limit={eventTicketsLimit} sale={eventSalesStart}/>
		  		</div>
			</div> 
		);
	}
		
}

export default EventsCalendar;