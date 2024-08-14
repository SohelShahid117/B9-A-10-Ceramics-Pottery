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
import UpdatePottery from "./Components/UpdatePottery/UpdatePottery";
import Users from "./Components/Users/Users";
import UpdateUsers from "./Components/UpdateUsers/UpdateUsers";

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
        // loader: () => fetch("./pottery.json"),
        loader: () =>
          fetch(
            "https://b9-a-10-ceramics-pottery-server-4lx8.vercel.app/myPotteryCeramics"
          ),
      },
      {
        path: `/pottery/:_id`,
        element: (
          <PrivateRoute>
            <PotteryDetails></PotteryDetails>
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            "https://b9-a-10-ceramics-pottery-server-4lx8.vercel.app/myPotteryCeramics"
          ),
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
        path: `/updatePotteryCeramics/:_id`,
        element: (
          <PrivateRoute>
            <UpdatePottery></UpdatePottery>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b9-a-10-ceramics-pottery-server-4lx8.vercel.app/myPotteryCeramics/${params._id}`
          ),
      },
      {
        path: "/myPotteryCeramics",
        element: (
          <PrivateRoute>
            <MyPottery></MyPottery>,
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            "https://b9-a-10-ceramics-pottery-server-4lx8.vercel.app/myPotteryCeramics"
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
      {
        path: "/users",
        element: <Users></Users>,
        // loader: () => fetch(`https://b9-a-10-ceramics-pottery-server-4lx8.vercel.app/users`),
      },
      {
        path: `/updateUsers/:_id`,
        element: <UpdateUsers></UpdateUsers>,
        loader: ({ params }) =>
          // fetch(`https://b9-a-10-ceramics-pottery-server-4lx8.vercel.app/users/${params._id}`),
          fetch(
            `https://b9-a-10-ceramics-pottery-server-4lx8.vercel.app/users/${params._id}`
          ),
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
