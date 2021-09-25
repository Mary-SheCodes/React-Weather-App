import { useState } from "react/cjs/react.development";
import "./Search.css";

export default function Serach() {
  const [loader, setLoader] = useState(false);
  const [city, setCity] = useState("Paris");
  const [weatherdata, setWeatherdata] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    useEffect(function () {
      const apiKey = "23422500afd990f6bd64b60f46cf509a";
      let units = "metric";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
      return axios.get(apiUrl).then(getApi);
    }, []);

    function getApi(response) {
      setWeatherdata({
        temprature: Math.round(response.data.main.temp),
        humidity: response.data.main.humidity,
        wind: response.data.wind.speed,
        description: response.data.weather[0].description,
        city: response.data.name,
        country: response.data.sys.country,
      });
      setLoader(true);
    }
  }

  function handleGetCityName(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  if (loader) {
    return (
      <form id="search-form" className="form" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            id="search-input"
            type="search"
            className="form-control me-1"
            placeholder="Enter City Name"
            aria-label="City Name"
            aria-describedby="basic-addon2"
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary me-1"
              type="submit"
              id="submit-addon2"
              onInput={handleGetCityName}
            >
              Search
            </button>
            <button
              className="btn btn-outline-secondary me-1"
              type="button"
              id="button-addon2"
            >
              Current
            </button>
          </div>
        </div>
      </form>

      
    );
  } else {
    return "Loader";
  }
}
