import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "@fortawesome/fontawesome-free/css/all.min.css";
import SecondsCounter from "./componentes/SecondsCounter";

let segundosContador = 0;

setInterval(() => {
  const six = Math.floor(segundosContador / 100000);
  const five = Math.floor(segundosContador / 10000);
  const four = Math.floor(segundosContador / 1000);
  const three = Math.floor(segundosContador / 100);
  const two = Math.floor(segundosContador / 10);
  const one = Math.floor(segundosContador / 1);
  console.log(six, five, four, three, two, one);

  segundosContador++;

  ReactDOM.render(
    <SecondsCounter
      digitOne={one}
      digitTwo={two}
      digitThree={three}
      digitFour={four}
      digitFive={five}
      digitSix={six}
    />,
    document.getElementById("root")
  );
}, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
