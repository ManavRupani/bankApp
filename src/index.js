import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import App from "./App";
ReactDOM.render(
  <React.StrictMode>
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
