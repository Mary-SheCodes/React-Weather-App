import { useState } from "react";

const ShowCurrentData = ({ setDataFromChild }) => {
  const [data, setData] = useState("");

  const navigation = (event) => {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(showPosition);
  };

  const showPosition = (position) => {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let latandlon = `lat=${latitude}&lon=${longitude}`;
    let apiKey = "23422500afd990f6bd64b60f46cf509a";
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?${latandlon}&appid=${apiKey}&units=${unit}
 `;
    setData(apiUrl);
  };

  setDataFromChild(data);

  return (
    <div>
      <button
        className="btn btn-outline-secondary me-1"
        type="button"
        onClick={navigation}
      >
        Current
      </button>
    </div>
  );
};

export default ShowCurrentData;
