import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";

import Router from "./router/Router";
import InstallAppsProvider from "./contaxtApi/InstallContaxt";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <InstallAppsProvider>
      <RouterProvider router={Router} />
    </InstallAppsProvider>
  </StrictMode>
);