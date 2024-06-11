import { useRef, useState } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState(null);
  const nameInputRef = useRef();
  function onSetNameClicked() {
    setPlayerName(nameInputRef.current.value);
    nameInputRef.current.value = "";
  }
  return (
    <article id="player">
      <h2>Welcome {playerName ?? "Player"}!</h2>
      <p>
        <input ref={nameInputRef} className="player-name" type="text" />
        <button onClick={onSetNameClicked}>Set Name</button>
      </p>
    </article>
  );
}
