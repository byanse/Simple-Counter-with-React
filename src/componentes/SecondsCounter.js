import React from "react";
import propTypes from "prop-types";
import "./SecondsCounter.css";

function SecondsCounter(props) {
  return (
    <div className="cajaGrande">
      <div className="icono">
        <i className="far fa-clock"></i>
      </div>
      <div className="six">{props.digitSix % 10}</div>
      <div className="five">{props.digitFive % 10}</div>
      <div className="four">{props.digitFour % 10}</div>
      <div className="three">{props.digitThree % 10}</div>
      <div className="two">{props.digitTwo % 10}</div>
      <div className="one">{props.digitOne % 10}</div>
    </div>
  );
}

SecondsCounter.propTypes = {
  digitOne: propTypes.number,
  digitTwo: propTypes.number,
  digitThree: propTypes.number,
  digitFour: propTypes.number,
  digitFive: propTypes.number,
  digitSix: propTypes.number,
};
export default SecondsCounter;
