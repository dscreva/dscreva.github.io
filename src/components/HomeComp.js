import React from "react";
import { Link } from "react-router-dom";
import "./styles/HomeComp.css";

function HomeComp() {
  return (
    <div className="home">
      <section className="top-navigation">
        <Link href="/events">Events</Link>
        <span className="line"></span>
        <Link href="/" className="logo">
          <img
            src={require("./static/logo.png")}
            alt="dsc reva"
            style={{ marginRight: "0.5rem" }}
          />
          DSC REVA
        </Link>
        <span className="line"></span>
        <Link href="/team">Teams</Link>
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
        <Link href="/" style={{ color: "#0F9D58" }}>
          Blogs
        </Link>
        <Link href="/" style={{ color: "#1A73E8" }}>
          Domains
        </Link>
        <Link href="/" style={{ color: "#EA4335" }}>
          About Us
        </Link>

        <Link href="/">Contact Us</Link>
      </section>
    </div>
  );
}

export default HomeComp;
