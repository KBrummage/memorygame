import React from "react";
import "./FlowerCard.css";

const FlowerCard = props => (
  <div onClick={() => props.pickFlower(props.id)} className="card">
    <div className="img-container">
      <img alt={props.name} href={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
      </ul>
    </div>
  </div>
);

export default FlowerCard;
