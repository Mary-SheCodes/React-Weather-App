import "./HumidityAndWind.css";
export default function HumidityAndWind(props) {
  return (
    <div className="humidity-and-wind">
      <div>Humidity: {props.data1}%</div>
      <div>Wind: {props.data2} km/h</div>
    </div>
  );
}
