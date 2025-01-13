import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Page/Home";
import Blog from "../Page/Blog";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";

export const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout />,
    children:[
      {
        path:'/',
        element:<Home />
      },
      {
        path:'Blog',
        element:<Blog />
      }
    ]
  },
  {
    path:'/login',
    element:<Login />
  },
  {
    path:'/registration',
    element:<Register />
  }
])