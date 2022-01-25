import React from "react";
import "./Player.scss";
export default function Player(props) {
  const onClickIncrement = () => {
    props.incrementScore(props.id);
  };

  return (
    <li className={"Player"}>
      <div
        className="percentage_coloring"
        style={{ width: props.score + "%" }}
      />
      <p>
        {props.name} (score: {props.score})
        <button onClick={onClickIncrement}>Score +1</button>
      </p>
    </li>
  );
}
