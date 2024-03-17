import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { MyProvider } from "./context/MyContext";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MyProvider>
      <App />
    </MyProvider>
  </React.StrictMode>
);
