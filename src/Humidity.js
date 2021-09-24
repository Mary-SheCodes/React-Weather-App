import "./Humidity.css";
export default function Humidity(props) {
  return (
    <div className="humidity">
      <div>Humidity: {props.data}%</div>
    </div>
  );
}
