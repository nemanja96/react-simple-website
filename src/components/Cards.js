import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <div className="cards-text">
        <h1>This is new creative process</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="cards-container">
        <div className="cards-wrapper">
          <ul className="cards-items">
            <CardItem
              src="/img/idea.png"
              title="Idea"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
              path="/services"
            />
            <CardItem
              src="/img/prototype.png"
              title="Prototype"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
              path="/services"
            />
            <CardItem
              src="/img/product.png"
              title="Product"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
