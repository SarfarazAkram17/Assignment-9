import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import CompanyDetials from "../Components/CompanyDetails/CompanyDetials";
import MyProfile from "../pages/MyProfile/MyProfile";
import Blog from "../pages/Blog/Blog";
import PrivateRoutes from "./PrivateRoutes";
import EditProfile from "../pages/EditProfile/EditProfile";

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
        element: <PrivateRoutes><CompanyDetials></CompanyDetials></PrivateRoutes>,
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
      {
        path: "/myProfile",
        element: <PrivateRoutes><MyProfile></MyProfile></PrivateRoutes>
      },
      {
        path: "/editProfile",
        element: <PrivateRoutes><EditProfile></EditProfile></PrivateRoutes>
      },
      {
        path: "/blog",
        element: <PrivateRoutes><Blog></Blog></PrivateRoutes>
      },
    ],
  },
]);
