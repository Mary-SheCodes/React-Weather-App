import "./CurrentStatusIcon.css";
export default function CurrentStatusIcon(props) {
  let imgDescription = props.data;
  imgDescription = imgDescription.replace(" ", "_");

  let imgUrl = `/weathericons/${imgDescription}.png`;
  return (
    <div>
      <img
        src={imgUrl}
        className="weathericone img-fluid"
        alt={props.data}
        id="defaultIcon"
      />
    </div>
  );
}
