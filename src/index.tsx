import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app";
import './styles/style.scss';

const container: HTMLElement | null = document.getElementById("root");
const root = container && createRoot(container);

if (root) {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );    
} else {
  <React.StrictMode>
    <div>WARNING: React cannot attach itself to the DOM.</div>
  </React.StrictMode>
}
