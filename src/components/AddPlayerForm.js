import React from "react";
import { useState } from "react";

export default function AddPlayerForm(props) {
  const [name, set_name] = useState("");

  return (
    <div className="AddPlayerForm">
      <p>
        New player:{" "}
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => {
            set_name(event.target.value);
          }}
        />{" "}
        <button
          onClick={() => {
            props.addPlayer(name);
          }}
        >
          Add
        </button>
      </p>
    </div>
  );
}
