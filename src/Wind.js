import "./Wind.css";
export default function Wind(props) {
  return (
    <div className="wind">
      <div id="wind">Wind: {props.data} km/h</div>
    </div>
  );
}
