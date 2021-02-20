import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  return (
    <>
      <li className="cards-item">
        <Link className="cards-item-link" to={props.path}>
          <img src={props.src} />
          <h3>{props.title}</h3>
          <p>{props.text}</p>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
