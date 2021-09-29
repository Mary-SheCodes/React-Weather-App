import "./CurrentStatus.css";
export default function CurrentStatusIcon(props) {
  let imgDescription = props.data;
  imgDescription = imgDescription.replaceAll(" ", "_");

  let imgUrl = `/weathericons/${imgDescription}.png`;
  return (
    <div>
      <div>
        <img
          src={imgUrl}
          className="weathericone img-fluid"
          alt={props.data}
          id="defaultIcon"
        />
      </div>
      <div className="status">{props.data}</div>
    </div>
  );
}
