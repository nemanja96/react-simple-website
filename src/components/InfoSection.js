import React from "react";
import "./InfoSection.css";
import Button from "./Button";

function InfoSection(props) {
  return (
    <div className="info-section">
      <h3>{props.subtitle}</h3>
      <h2>{props.title}</h2>
      <p>{props.text}</p>
      <div className="info-btn">
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--medium"
        >
          {props.btn}
        </Button>
      </div>
    </div>
  );
}

export default InfoSection;
