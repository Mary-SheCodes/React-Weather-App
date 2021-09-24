import "./ShowCurrentLocation.css";
export default function ShowCurrentLocation(props) {
  return (
    <div className="maincity">
      <span> {props.data1}</span>
      <span>, </span>
      <span> {props.data2}</span>
    </div>
  );
}
