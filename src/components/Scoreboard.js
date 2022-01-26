import { useState } from "react";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";

function compare_score(player_a, player_b) {
  return player_b.score - player_a.score;
}

function compare_name(player_a, player_b) {
  return player_a.name.localeCompare(player_b.name);
}

export default function Scoreboard() {
  const [players, set_players] = useState([
    { id: 1, name: "Vinnie", score: 11 },
    { id: 2, name: "Jesse", score: 14 },
    { id: 3, name: "Dave", score: 4 },
    { id: 4, name: "Jeroen", score: 42 },
  ]);

  const [sort_by, set_sort_by] = useState("score");

  const players_sorted = [...players].sort(
    sort_by === "name" ? compare_name : compare_score
  );

  const change_sorting = (event) => {
    console.log("new sort order:", event.target.value);
    set_sort_by(event.target.value);
  };

  const incrementScore = (id) => {
    const new_players_array = players.map((player) => {
      if (player.id === id) {
        return {
          ...player,
          score: player.score + 1,
        };
      } else {
        return player;
      }
    });

    set_players(new_players_array);
  };

  const resetScore = () => {
    const new_players_array = players.map((player) => ({
      ...player,
      score: 0,
    }));

    set_players(new_players_array);
  };

  const randomScore = () => {
    const new_players_array = players.map((player) => ({
      ...player,
      score: Math.floor(Math.random() * 101),
    }));

    set_players(new_players_array);
  };

  const addPlayer = (name) => {
    console.log("Let's add a new player with the name:", name);
    set_players([
      ...players,
      {
        id: Math.random(),
        name,
        score: 0,
      },
    ]);
  };

  return (
    <div className="Scoreboard">
      <p>
        Sort order:{" "}
        <select onChange={change_sorting} value={sort_by}>
          <option value="score">Sort by score</option>
          <option value="name">Sort by name</option>
        </select>
        <button onClick={resetScore}>Reset</button>
        <button onClick={randomScore}>Random</button>
      </p>

      <p>Player score:</p>
      <ul>
        {players_sorted.map((player) => (
          <Player
            key={player.id}
            id={player.id}
            name={player.name}
            score={player.score}
            incrementScore={incrementScore}
          />
        ))}
      </ul>
      <AddPlayerForm addPlayer={addPlayer} />
    </div>
  );
}
