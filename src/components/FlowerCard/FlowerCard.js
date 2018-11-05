import React from "react";
import "./FlowerCard.css";

const FlowerCard = props => (
  <div onClick={() => props.pickFlower(props.id)} className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>{props.name}</strong>
        </li>
      </ul>
    </div>
  </div>
);

export default FlowerCard;
