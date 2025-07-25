import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

import Signup from "../pages/authpage/Signup";
import Signin from "../pages/authpage/Signin";
import Home from "../pages/home/Home";
import OurMenu from "../pages/our-menu/OurMenu";
import OurShop from "../pages/our-shop/OurShop";

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
        path: "/our-menu",
        element: <OurMenu></OurMenu>,
      },
      {
        path: "/our-shop",
        element: <OurShop></OurShop>,
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
