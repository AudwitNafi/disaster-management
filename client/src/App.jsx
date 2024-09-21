import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";
import { loader as dashboardLoader } from "./pages/DashboardLayout";
import { loader as allCrisesLoader } from "./pages/AllCrisis";
import { action as addCrisisAction } from "./pages/AllCrisis";
import { loader as editCrisisLoader } from "./pages/EditCrisis";
import { action as editCrisisAction } from "./pages/EditCrisis";
import { action as deleteCrisisAction } from "./pages/DeleteCrisis";
import { action as addDonationAction } from "./pages/Donation";
import { loader as addDonationLoader } from "./pages/Donation";
import { loader as adminLoader } from "./pages/Admin";
import {
  Admin,
  Login,
  Landing,
  AllCrisis,
  Dashboard,
  DashboardLayout,
  Donation,
  EditCrisis,
  HomeLayout,
  Inventory,
  Profile,
  Register,
  Report,
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
            loader: addDonationLoader,
            action: addDonationAction,
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
            loader: adminLoader,
          },
          {
            path: "crisis",
            element: <AllCrisis />,
            loader: allCrisesLoader,
            action: addCrisisAction,
          },
          {
            path: "admin",
            element: <Admin />,
            loader: adminLoader,
            children: [
              {
                index: true,
                element: <Volunteer />,
              },
              {
                element: <AllCrisis />,
              },
              {
                element: <Report />,
              },
            ],
          },
          {
            path: "volunteer",
            element: <Volunteer />,
          },
          {
            path: "edit-crisis/:id",
            element: <EditCrisis />,
            loader: editCrisisLoader,
            action: editCrisisAction,
          },
          { path: "delete-crisis/:id", action: deleteCrisisAction },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
