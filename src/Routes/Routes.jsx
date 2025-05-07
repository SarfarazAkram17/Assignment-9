import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import CompanyDetials from "../Components/CompanyDetails/CompanyDetials";
import MyProfile from "../pages/MyProfile/MyProfile";
import PrivateRoutes from "./PrivateRoutes";
import Success from "../pages/Success/Success";
import { lazy, Suspense } from "react";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";

const Login = lazy(() => import("../pages/Login/Login"));
const Register = lazy(() => import("../pages/Register/Register"));
const ForgotPassword = lazy(() =>
  import("../pages/ForgetPassword/ForgotPassword")
);
const ErrorPage = lazy(() => import("../pages/ErrorPage/ErrorPage"));
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
          <div className="flex justify-center mt-28 mb-20">
            <span className="loading loading-bars loading-xl"></span>
          </div>
        ),
      },
      {
        path: "/company/:id",
        loader: () => fetch("/companies.json"),
        element: (
          <PrivateRoutes>
            <CompanyDetials></CompanyDetials>
          </PrivateRoutes>
        ),
        hydrateFallbackElement: (
          <div className="flex justify-center mt-28 mb-20">
            <span className="loading loading-bars loading-xl"></span>
          </div>
        ),
      },
      {
        path: "/success",
        loader: () => fetch("/reviews.json"),
        Component: Success,
        hydrateFallbackElement: (
          <div className="flex justify-center mt-28 mb-20">
            <span className="loading loading-bars loading-xl"></span>
          </div>
        ),
      },
      {
        path: "/login",
        element: (
          <Suspense
            fallback={
              <div className="flex justify-center mt-28 mb-20">
                <span className="loading loading-bars loading-xl"></span>
              </div>
            }
          >
            <Login></Login>
          </Suspense>
        ),
      },
      {
        path: "/forgotPassword",
        element: (
          <Suspense
            fallback={
              <div className="flex justify-center mt-28 mb-20">
                <span className="loading loading-bars loading-xl"></span>
              </div>
            }
          >
            <ForgotPassword></ForgotPassword>
          </Suspense>
        ),
      },
      {
        path: "/register",
        element: (
          <Suspense
            fallback={
              <div className="flex justify-center mt-28 mb-20">
                <span className="loading loading-bars loading-xl"></span>
              </div>
            }
          >
            <Register></Register>
          </Suspense>
        ),
      },
      {
        path: "/myProfile",
        element: (
          <PrivateRoutes>
            <MyProfile></MyProfile>
          </PrivateRoutes>
        ),
      },
      {
        path: "/updateProfile",
        element: (
          <PrivateRoutes>
            <UpdateProfile></UpdateProfile>
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: "*",
    element: (
      <Suspense
        fallback={
          <div className="h-screen flex justify-center items-center">
            <span className="loading loading-bars loading-xl"></span>
          </div>
        }
      >
        <ErrorPage></ErrorPage>
      </Suspense>
    ),
  },
]);
