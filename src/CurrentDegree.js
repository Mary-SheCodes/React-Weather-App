import React, { useState, useEffect } from "react";
import "./CurrentDegree.css";
export default function CurrentDegree(props) {
  let [temprature, setTemprature] = useState(props.data);
  const [celsiusclass, setCelsiusclass] = useState("active-temp");
  const [fahrenheitclass, setFahrenheitclass] = useState("deactive-temp");
  const [mode, setMode] = useState("Celsius");

  function showTemprature() {
    if (mode === "Celsius") {
      showCelsius();
    } else {
      convertToFahrenheit();
    }
  }

  useEffect(showTemprature);

  function showCelsius(event) {
    event?.preventDefault();
    setTemprature(props.data);
    setMode("Celsius");
    setCelsiusclass("active-temp");
    setFahrenheitclass("deactive-temp");
  }

  function convertToFahrenheit(event) {
    event?.preventDefault();
    let fahrenheit = Math.round((props.data * 9) / 5 + 32);
    setTemprature(fahrenheit);
    setMode("Fahrenheit");
    setFahrenheitclass("active-temp");
    setCelsiusclass("deactive-temp");
  }

  return (
    <div>
      <div className="temperature">{temprature}</div>
      <div className="unit">
        <a href="/" className={celsiusclass} onClick={showCelsius}>
          °C
        </a>{" "}
        |
        <a href="/" className={fahrenheitclass} onClick={convertToFahrenheit}>
          °F
        </a>
      </div>
    </div>
  );
}
