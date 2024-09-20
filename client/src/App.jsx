import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";
import { loader as dashboardLoader } from "./pages/DashboardLayout";
import { loader as allCrisesLoader } from "./pages/AllCrisis";
import {
  Admin,
  Login,
  Landing,
  AllCrisis,
  Dashboard,
  DashboardLayout,
  Donation,
  HomeLayout,
  Inventory,
  Profile,
  Register,
  Volunteer,
} from "./pages";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "login",
        element: <Login />,
        action: loginAction,
      },
      {
        path: "register",
        element: <Register />,
        action: registerAction,
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        loader: dashboardLoader,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: "donation",
            element: <Donation />,
          },
          {
            path: "inventory",
            element: <Inventory />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "admin",
            element: <Admin />,
          },
          {
            path: "crisis",
            element: <AllCrisis />,
            loader: allCrisesLoader,
          },
          {
            path: "admin",
            element: <Admin />,
          },
          {
            path: "volunteer",
            element: <Volunteer />,
          },
          // {
          //   path: "edit-job/:id",
          //   // element: <EditJob />,
          //   element: <h1>EditJob</h1>,
          // },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
