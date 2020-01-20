import React from 'react';
// 'axios' to fetch data from backend //
import axios from '../utils/axios';
// 'GoogleMaps' to show places on google maps //
import GoogleMaps from './GoogleMaps';
// 'Accordion' to create collapsible container //
import Accordion from './Accordion';
// use 'Moment' to format the time correctly //
import Moment from 'react-moment';


// function to loop through each guest in a specific event //
function loadGuests(event){
    return event.guests.map((guest, idx) =>
    <li className={event.type} key={idx}>{guest}</li>
    )
}

// function to look through each comment in a specific event //
// use 'Moment' to format the time correctly //
function loadComments(event){
    return event.comments.map((comment, idx) =>
        <li  key={idx}>
        <Moment format="LLLL">{comment.timestamp}</Moment>
            <div className={event.type + "-comment comment"}>{comment.user.name +": "+comment.message}</div>
        </li>
    )
}

class EventList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data:{},
        getDataDone: false
      };
      
    }
    // waits for response, binds it to the state and toggles the 'getDataDone' prop //
    componentDidMount() {
        axios.get('/api/users/me/events').then((res) => {
            this.setState({
                data: res.data,
                getDataDone: true
            })  
        }) 
        .catch((res)=>{
            console.log("error", res);
        }); 
    }
    
    /* Loops through all the events given by the server and builds them.
     right now all google maps will be loaded on the page, in production 
     to save CPU and data, lazy loading is recommended */
    renderEvents(){
        return this.state.data.map((event, idx) =>
        <Accordion title={event.title} type={event.type} key={idx}>
                    <ul className="event-block__information__text"> 
                        <li>Date: <Moment format="LLLL">{event.time}</Moment></li>
                        <li>Location: {event.location.name}</li>
                        <ul className="guest-container">Guests:{loadGuests(event)}</ul>
                        <Accordion title={"Comments: "+ event.comments.length} type={"comment"}><ul className="comment-container">{loadComments(event)}</ul></Accordion>
                    </ul>
                    <div className="event-block__information__google-maps"><GoogleMaps title={event.title} lat={event.location.latitude} lng={event.location.longitude}/></div>             
        </Accordion>    
        )                                    
    }
    // Renders nothing until the state of 'getDataDone' goes to true, will render the class 'EventList'//
    render() {
        var event = "";
        if(this.state.getDataDone){
            return <div>{this.renderEvents()}</div>;
        }
        return <div>{event}</div>;
    }  
}

export default EventList;