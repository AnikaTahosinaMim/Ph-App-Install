import React from "react";
import { createBrowserRouter } from "react-router";
import Homepage from "../pages/Homepage";
import AllApps from "../pages/AllApps";
import Install from "../pages/Install";
import NotFound from "../pages/NotFound";
import MainLayout from "../Layout/MainLayout";
import Appdetails from "../pages/Appdetails";
import { FcCallback } from "react-icons/fc";
import Dashboad from "../pages/Dashboad";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Homepage, loader: () => fetch("/data.json") },
      { path: "/app", Component: AllApps },
      { path: "/install", Component: Install },
      { path: "/app/:id", Component: Appdetails },
      {path : "/dashboad", Component:Dashboad}
    ],

    errorElement: <NotFound></NotFound>,
  },
]);

export default router;
