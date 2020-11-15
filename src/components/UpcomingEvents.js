import React, {Component} from "react"
import './styles/UpcomingEvents.css';
import prev from './static/prev.png';
import next from './static/next.png';
import { Thumbs } from "swiper";

// import { NavLink } from "react-router-dom";

export default class PastEvents extends Component{

  frosting(){

    document.querySelector(".frost_container:hover").onmousemove = e => {
        const x = e.pageX - e.target.offsetLeft;
        const y = e.pageY - e.target.offsetTop;
    
        e.target.style.setProperty("--x", `${x}px`);
        e.target.style.setProperty("--y", `${y}px`);
    };
  }

  close(){
    window.history.go(-1);
  }

  
  render(){
    return(
      <div className="UpcomingEventsContainer">
        <div className="UpcomingEventsTitle">Upcoming Events</div>
          <div className="event_details">
            <div className="h-100 valign-wrapper" onClick={()=>this.props.handlePrev()}>
            <img className="hovermousepointer" src={prev} alt="Previous Member"/>
          </div>
    
        <div className="events_container">
        <div className="events_container_top">       
          <img class="upcomingEventImage" alt="" src={require(`${this.props.events_new.image_url}`)} />
          </div>
              <div className="dateAndType">
                <div className="event_date">{this.props.events_new.date}</div>
                <div className="event_type">{this.props.events_new.type}</div>
                </div>
                <div className="otherdetails">
                  <div className="event_title">{this.props.events_new.title}</div>
                  <div className="event_description">{this.props.events_new.description}</div>
                    <div className="dummy">
                      <br />
                      <a href={this.props.events_new.link} className="viewDetails">View Details</a>
                    </div>
                    </div>
        </div>

        <div className="h-100 valign-wrapper" onClick={()=>this.props.handleNext()}>
          <img className="hovermousepointer" src={next} alt="Next Member"/>
        </div>
      </div>
    </div>
    );
  }

}