import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";
import { loader as dashboardLayoutLoader } from "./pages/DashboardLayout";
import { loader as dashboardLoader } from "./pages/Dashboard";
import { loader as allCrisesLoader } from "./pages/AllCrisis";
import { action as addCrisisAction } from "./pages/AllCrisis";
import { loader as editCrisisLoader } from "./pages/EditCrisis";
import { action as editCrisisAction } from "./pages/EditCrisis";
import { action as deleteCrisisAction } from "./pages/DeleteCrisis";
import { action as addDonationAction } from "./pages/Donation";
import { loader as addDonationLoader } from "./pages/Donation";
import { loader as adminLoader } from "./pages/Admin";
import { loader as availableVolunteersLoader } from "./pages/Volunteer";
import { action as profileAction } from "./pages/Profile";
import { action as approveVolunteerAction } from "./pages/ApproveVolunteer";
import { action as assignTaskAction } from "./pages/AssignTask";
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
  AdminReport,
  Volunteer,
  AdminCrisis,
  AdminVolunteer,
  AssignTask,
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
        loader: dashboardLayoutLoader,
        children: [
          {
            index: true,
            element: <Dashboard />,
            loader: dashboardLoader,
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
            action: profileAction,
          },
          {
            path: "crisis",
            element: <AllCrisis />,
            loader: allCrisesLoader,
            action: addCrisisAction,
          },
          {
            path: "volunteers",
            element: <Volunteer />,
            loader: availableVolunteersLoader,
          },
          {
            path: "admin",
            element: <Admin />,
            loader: adminLoader,
            children: [
              {
                index: true,
                path: "volunteers",
                element: <AdminVolunteer />,
              },
              {
                path: "crisis",
                element: <AdminCrisis />,
              },
              {
                path: "report",
                element: <AdminReport />,
              },
              { path: "approve/:id", action: approveVolunteerAction },
              {
                path: "assign/:id",
                element: <AssignTask />,
                action: assignTaskAction,
              },
            ],
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
