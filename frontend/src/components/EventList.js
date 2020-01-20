import React from 'react';
import axios from '../utils/axios';
import GoogleMaps from './GoogleMaps';
import Accordion from './Accordion';
import Moment from 'react-moment';


function loadGuests(event){
    return event.guests.map((guest, idx) =>
    <li className={event.type} key={idx}>{guest}</li>
    )
}

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
    componentDidMount() {
        axios.get('/api/users/me/events').then((res) => {
            console.log("This is the data\n", res.data);
            this.setState({
                data: res.data,
                getDataDone: true
            })  
        }) 
        .catch((res)=>{
            console.log("error", res);
        }); 
    }
    
    

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

    render() {
        var event = "";
        if(this.state.getDataDone){
            return <div>{this.renderEvents()}</div>;
        }

    return <div>{event}</div>;
    }
    
  }

  export default EventList;