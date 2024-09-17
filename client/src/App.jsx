import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Admin from "./pages/Admin";
import Login from "./pages/Login";
// import Crisis from "./pages/Crisis";
// import Donation from "./pages/Donation";
import HomeLayout from "./pages/HomeLayout";
// import Inventory from "./pages/Inventory";
import Landing from "./pages/Landing";
// import Profile from "./pages/Profile";
import Register from "./pages/Register";
// import Report from "./pages/Report";
// import Volunteer from "./pages/Volunteer";
// import {
//   Admin,
//   Login,
//   Crisis,
//   Donation,
//   HomeLayout,
//   Inventory,
//   Profile,
//   Register,
//   Report,
//   Volunteer,
// } from "./pages";
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
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
