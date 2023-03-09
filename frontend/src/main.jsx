import React from "react";
import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
// import { authContext } from "./hooks/AuthContext";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <BrowserRouter>
  //   <authContext>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  //   </authContext>
  // </BrowserRouter>
);
