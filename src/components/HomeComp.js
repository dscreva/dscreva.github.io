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
        <h2>
          Joi<span style={{ color: "#EA4335" }}>n</span> Our{" "}
          <span style={{ color: "#FBBC04" }}>C</span>om
          <span style={{ color: "#1A73E8" }}>m</span>u
          <span style={{ color: "#0F9D58" }}>n</span>ity
        </h2>
        <p>Our main mission here at DSC REVA is to provide students access to the latest updates in technology through workshops, hackathons, and seminars by experts from the industry. And remember, the only way to stay relevant in the field of tech is to be ready to learn and unlearn whenever required.</p>
      </section>

      <section className="bottom-navigation">
        <Link to="/blogs" style={{ color: "#0F9D58" }}>
          <span className="blogs-hover-btn">Blogs</span>
        </Link>
        <Link to="/" style={{ color: "#EA4335" }}>
          About Us
        </Link>

        <Link to="/">Contact Us</Link>
      </section>
    </div>
  );
}

export default HomeComp;
