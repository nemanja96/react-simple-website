import React from "react";
import Button from "./Button";
import "../App.css";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <div className="hero-container-text">
        <h1>Where data and creativity come together.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </p>
        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            Get Started Now
          </Button>
        </div>
      </div>
      <div className="hero-container-image">
        <img src="/img/01.jpg" />
      </div>
    </div>
  );
}

export default HeroSection;
