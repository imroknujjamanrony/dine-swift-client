import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Signup from "../pages/authpage/Signup";
import Signin from "../pages/authpage/Signin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/signin",
        element: <Signin></Signin>,
      },
    ],
  },
]);
export default router;
