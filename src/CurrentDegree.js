import "./CurrentDegree.css";
export default function CurrentDegree(props) {
  return (
    <div id="degree">
      <div className="temperature" id="temperature">
        {props.data}
      </div>
      <div className="unit">
        <a href="/" id="celsius-link" className="active-temp">
          °C
        </a>{" "}
        |
        <a href="/" id="fahrenheit-link">
          °F
        </a>
      </div>
    </div>
  );
}
