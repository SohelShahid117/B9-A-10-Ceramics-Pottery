import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Components/Root/Root";
import Home from "./Components/Home/Home";
import AddPottery from "./Components/AddPottery/AddPottery";
import MyPottery from "./Components/MyPottery/MyPottery";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import AuthProvider from "./Provider/AuthProvider";
import Login from "./Components/Login/Login";
import Registration from "./Components/Registration/Registration";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import PotteryDetails from "./Components/PotteryDetails/PotteryDetails";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <div>Hello world!</div>,
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("./pottery.json"),
      },
      {
        path: `/pottery/:id`,
        element: (
          <PrivateRoute>
            <PotteryDetails></PotteryDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/pottery.json"),
      },
      {
        path: "/addPotteryCeramics",
        element: (
          <PrivateRoute>
            <AddPottery></AddPottery>
          </PrivateRoute>
        ),
      },
      {
        path: "/myPotteryCeramics",
        element: (
          <PrivateRoute>
            <MyPottery></MyPottery>,
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
