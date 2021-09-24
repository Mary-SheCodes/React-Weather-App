import Footer from "./Footer";

import "./App.css";
import Api from "./Api";

export default function APP() {
  return (
    <div>
      <div className="main-box">
        <div className="container">
          <Api />
          <div className="title">Next Hours</div>
          <div className="row"></div>
          <div className="title">Next Days</div>
          <div className="row"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
