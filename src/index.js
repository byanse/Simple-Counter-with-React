import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "@fortawesome/fontawesome-free/css/all.min.css";
import SecondsCounter from "./componentes/SecondsCounter";

let segundosContador = 0;

setInterval(() => {
  segundosContador++;

  ReactDOM.render(
    <SecondsCounter segundos={segundosContador} />,
    document.getElementById("root")
  );
}, 1000);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
