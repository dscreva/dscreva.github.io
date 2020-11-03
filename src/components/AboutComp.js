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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo facilisis elit commodo, et facilisis elit est non lobortis. Laoreet neque, faucibus nisl quis venenatis sed sed aliquet aenean. In turpis sed morbi quam eget adipiscing pharetra malesuada. Ut eget vitae ut diam nullam varius orci potenti tellusbbjbb dhf nulllars jofolvffg.
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