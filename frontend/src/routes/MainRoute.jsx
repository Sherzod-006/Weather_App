//IMPORTING RRD
import { createBrowserRouter } from "react-router-dom";
//IMPORTING LAYOUTS
import MainLayout from "../layouts/MainLayout";
//IMPORTING PAGES
import HomePage from "../pages/HomePage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [{ index: true, element: <HomePage /> }],
  },
]);
