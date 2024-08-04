import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Mi } from "./Pages/Mi";
import { Rcb } from "./Pages/Rcb";
import { Csk } from "./Pages/Csk";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="mi" element={<Mi />} />
      <Route path="csk" element={<Csk />} />
      <Route path="rcb" element={<Rcb />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
