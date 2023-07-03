import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "./styles/style.scss";
import { BrowserRouter } from "react-router-dom";
import { ViewportProvider } from './context/viewportContext';

const container: HTMLElement | null = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ViewportProvider>
        <App />
      </ViewportProvider>
    </BrowserRouter>
  </React.StrictMode>,
  container
);
