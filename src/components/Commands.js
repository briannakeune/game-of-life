import React from "react";

export default function Commands({ running, setRunning }) {
  function start() {
    setRunning(!running);
  }
  return (
    <div className="commands">
      <button onClick={start}>{running ? "Stop" : "Start"}</button>
    </div>
  );
}
