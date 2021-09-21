import "./Search.css";

export default function Serach() {
  return (
    <form id="search-form" className="form">
      <div className="input-group">
        <input
          id="search-input"
          type="search"
          className="form-control"
          placeholder="Enter City Name"
          aria-label="City Name"
          aria-describedby="basic-addon2"
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="submit"
            id="submit-addon2"
          >
            Search
          </button>
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            Current
          </button>
        </div>
      </div>
    </form>
  );
}