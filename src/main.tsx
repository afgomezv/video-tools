import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { NextUIProvider } from "@nextui-org/react";
import { OpenProvider } from "./context/openContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider>
      <OpenProvider>
        <RouterProvider router={router} />
      </OpenProvider>
    </NextUIProvider>
  </React.StrictMode>
);
