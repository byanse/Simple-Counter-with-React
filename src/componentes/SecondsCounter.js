import React from "react";
import "./SecondsCounter.css";

function SecondsCounter(props) {
  return (
    <div className="cajaGrande">
      <div>
        <i className="far fa-clock"></i>
      </div>
      <div>0</div>
      <div>0</div>
      <div>0</div>
      <div>0</div>
      <div>0</div>
      <div>{props.segundos}</div>
    </div>
  );
}

export default SecondsCounter;
