import React, {Component} from "react"
import './styles/PastEvents.css';
import events from '../PastEventsDetails.js';
import Swiper from 'swiper';

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

  componentDidMount () {
    // For bottom image slider
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 0,
      grabCursor: true,
      loop: true,
      freeMode: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        500: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        }
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }

  
  render(){ 
      return (

        <div className="pastEventsContainer">
          <div className="PastEventsTitle">Past Events</div>
            <br />

            <div className="events_row">  
              <div class="swiper-container" style={{width: "94vw", padding: "5px", marginBottom: "20px"}}>
                <div id="eventsSwiper" class="swiper-wrapper">
                  {events.map(function (events, index) {
                    return <div class="swiper-slide" style={{border: "solid 2px rgb(204, 204, 204)", borderRadius: "5px", marginLeft: "35px"}}>
                      <div className="imageStyles">
                        <img class="pastEventsSlide" alt="" src={require(`${events.image_url}`)} key={index}/>
                      </div>
                      <div className="past_title">
                        {events.title}
                      </div>
                        <div className="rewindFeedback">
                          <button className="rewind">Rewind</button>
                          <button className="feedback">Feedback</button>
                        </div>
                    </div>
                     })}
                </div>
                <div>
                  <div class="swiper-button-next"></div>
                  <div class="swiper-button-prev"></div>
                </div>
              </div>
          </div>
        </div>

      );
    }


  }