import React from "react";

const Card = (props) => {
  return (
    <div>
      <div>
        <ul>
          <li key={props.index}>{props.name}</li>
          <img src={props.url} alt={props.name} />
        </ul>
      </div>
      Cards
    </div>
  );
};

export default Card;
