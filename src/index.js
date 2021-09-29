import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Api from "./Api";
import "bootstrap/dist/css/bootstrap.min.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Api />
  </StrictMode>,
  rootElement
);
