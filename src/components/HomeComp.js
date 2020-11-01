import React from "react";
import "./styles/HomeComp.css";

function HomeComp() {
  return (
    <div className="home">
      <section className="top-navigation">
        <a href="/">Events</a>
        <span className="line"></span>
        <a href="/" className="logo">
          <img
            src={require("./static/logo.png")}
            alt="dsc reva"
            style={{ marginRight: "0.5rem" }}
          />
          DSC REVA
        </a>
        <span className="line"></span>
        <a href="/">Teams</a>
      </section>

      <section className="hero">
        <h2>
          Joi<span style={{ color: "#EA4335" }}>n</span> Our{" "}
          <span style={{ color: "#FBBC04" }}>C</span>om
          <span style={{ color: "#1A73E8" }}>m</span>u
          <span style={{ color: "#0F9D58" }}>n</span>ity
        </h2>
        <h4>Our Mission</h4>
      </section>

      <section className="bottom-navigation">
        <a href="/" style={{ color: "#0F9D58" }}>
          Blogs
        </a>
        <a href="/" style={{ color: "#1A73E8" }}>
          Domains
        </a>
        <a href="/" style={{ color: "#EA4335" }}>
          About Us
        </a>

        <a href="/" style={{marginLeft:"auto"}}>Contact Us</a>
      </section>
    </div>
  );
}

export default HomeComp;
