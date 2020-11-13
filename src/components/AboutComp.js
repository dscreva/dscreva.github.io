import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/AboutComp.css";

function HomeComp() {
  return (
    <div className="home">
      <section className="top-navigation">
        <NavLink to="/events">Events</NavLink>
        <span className="line"></span>
        <NavLink to="/" className="logo">
          <img
            src={require("./static/logo.png")}
            alt="dsc reva"
            style={{ marginRight: "0.5rem" }}
          />
          DSC REVA
        </NavLink>
        <span className="line"></span>
        <NavLink to="/team">Teams</NavLink>
      </section>

      <section className="about-content">
        <h3>
          <h2>About Us</h2>
          DSC REVA is a community group for students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome. By joining a DSC, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community.
        </h3>
      </section>

      <section className="bottom-navigation">
        <NavLink to="/blogs" style={{ color: "#0F9D58" }}>
          <span className="blogs-hover-btn">Blogs</span>
        </NavLink>
        <NavLink to="/" style={{ color: "#1A73E8" }}>
          <span className="domains-hover-btn">Domains</span>
        </NavLink>
        <NavLink to="/about" style={{ color: "#EA4335" }}>
          <span className="about-us-btn">About Us</span>
        </NavLink>

        <NavLink to="/">Contact Us</NavLink>
      </section>
    </div>
  );
}

export default HomeComp;