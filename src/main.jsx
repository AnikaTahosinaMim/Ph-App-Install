import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from "./Layout/MainLayout";
import AllApps from "./pages/AllApps";
import Homepage from "./pages/Homepage";
import Install from "./pages/Install";
import NotFound from "./pages/NotFound";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      { index: true, Component: Homepage },
      { path: "/app", Component: AllApps },
      {path:"/install",Component:Install}
    ],
    errorElement: <NotFound></NotFound>
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
);
