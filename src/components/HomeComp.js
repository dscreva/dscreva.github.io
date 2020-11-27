import React from "react";
import { Link } from "react-router-dom";
import "./styles/HomeComp.css";

function HomeComp() {
  return (
    <div className="home">
      <section className="top-navigation">
        <Link to="/events">Events</Link>
        <span className="line"></span>
        <Link to="/" className="logo">
          <img
            src={require("./static/logo.png")}
            alt="dsc reva"
            style={{ marginRight: "0.5rem" }}
          />
          DSC REVA
        </Link>
        <span className="line"></span>
        <Link to="/team">Teams</Link>
      </section>

      <section className="hero">
        <div className="hero_cont_wrap">
          <h2>
            Joi<span style={{color: "#DB4437"}}>n&nbsp;</span> 
            O<span style={{color: "#F4B400"}}>u</span>r 
            Co<span style={{color: "#0F9D58"}}>m</span>muni<span style={{color: "#4285F4"}}>t</span>y
          </h2>
          <p>Our main mission here at DSC REVA is to provide students access to the latest updates in technology through workshops, hackathons, and seminars by experts from the industry. And remember, the only way to stay relevant in the field of tech is to be ready to learn and unlearn whenever required.</p>
        </div>
      </section>

      <section className="bottom-navigation">
        <Link to="/blogs" style={{ color: "#0F9D58" }}>
          <span className="blogs-hover-btn">Blogs</span>
        </Link>
        <Link to="/about" style={{ color: "#EA4335" }}>
          <span className="about-us-hover-btn">About Us</span>
        </Link>

        <Link to="/contact-us">Contact Us</Link>
      </section>
    </div>
  );
}

export default HomeComp;
