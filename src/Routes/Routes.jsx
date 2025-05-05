import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/register/Register";
import CompanyDetials from "../Components/CompanyDetails/CompanyDetials";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        loader: () => fetch("/companies.json"),
        Component: Home,
        hydrateFallbackElement: (
          <div className="flex justify-center mt-48">
            <span className="loading loading-bars loading-xl"></span>
          </div>
        ),
      },
      {
        path: "/company/:id",
        loader: () => fetch("/companies.json"),
        Component: CompanyDetials,
        hydrateFallbackElement: (
          <div className="flex justify-center mt-48">
            <span className="loading loading-bars loading-xl"></span>
          </div>
        ),
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
]);
