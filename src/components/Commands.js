import React from "react";

export default function Commands(props) {
  function start() {
    props.setRunning(!props.running);
    setTimeout(() => {
        if (props.genCounter % 2 === 0) {
          console.log("gridA");
          props.setGenCounter(props.genCounter + 1);
          props.setDisplayGrid(props.calc_next_gen(props.gridA, props.gridB));
        } else if (props.genCounter % 2 !== 0) {
          console.log("gridB");
          props.setGenCounter(props.genCounter + 1);
          props.setDisplayGrid(props.calc_next_gen(props.gridB, props.gridA));
        }
      }, 200);
  }
  return (
    <div className="commands">
      <button onClick={start}>{props.running ? "Stop" : "Start"}</button>
    </div>
  );
}
