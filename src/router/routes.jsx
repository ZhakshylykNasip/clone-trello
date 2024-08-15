import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "../layout/MainLayout";
import { SignInPage } from "../pages/SignInPage";
import { NotFoundPage } from "../pages/404/NotFoundPage";
import { SignUpPage } from "../pages/SignUpPage";
import { PrivateRoute } from "./PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { isAuth } from "../store/slices/authSlice";

export const AppRoutes = () => {
  const dispatch = useDispatch();
  const { data } = JSON.parse(localStorage.getItem("auth")) || "";
  const { role } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(isAuth(data?.role));
  }, [dispatch]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <PrivateRoute
          Component={<MainLayout />}
          fallBackPath={"/login"}
          isAllowed={!role}
        />
      ),
    },
    {
      path: "login",
      element: (
        <PrivateRoute
          Component={<SignInPage />}
          fallBackPath={"/"}
          isAllowed={role}
        />
      ),
    },
    {
      path: "register",
      element: (
        <PrivateRoute
          Component={<SignUpPage />}
          fallBackPath={"/"}
          isAllowed={role}
        />
      ),
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};
