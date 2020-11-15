import React, {Component} from "react"
import './styles/PastEvents.css';
import events from '../PastEventsDetails.js';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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
  constructor(props) {
    super(props);
    this.state = {
      all_events: events, 
    }
  }
  
  render(){ 
    const settings = {
      className: 'center',
      dots: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      infinite: true,
      responsive: [
        {
          breakpoint: 320,
          settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true }
        },
        {
          breakpoint: 768,
          settings: { slidesToShow: 2, slidesToScroll: 2, infinite: true }
        },
        {
          breakpoint: 1024,
          settings: { slidesToShow: 3, slidesToScroll: 3, infinite: true }
        }
      ]
    };

    

      return (

        <>
        <div className="PastEventsTitle">Past Events</div>
        <div className="pastEventsContainer">
            <br />
              
              <Slider className="pastEventsSlider" {...settings}>
             
                    {events.map(function (events, index) {
                        return <div className="pastEventsBox">
                        <img className="pastEventsImagePoster" src={require(`${events.image_url}`)} alt="" />
                        <p>{events.title}</p>
                        <div className="rewindFeedback">
                          <a href ={events.link} className="rewind">Rewind</a>
                          <a className="feedback">Feedback</a>
                        </div>
                          </div>
                      })}
              </Slider>
          </div>
        </>
      );
    }


  }