import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "./styles/style.scss";
import { BrowserRouter } from "react-router-dom";

const container: HTMLElement | null = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  container
);
