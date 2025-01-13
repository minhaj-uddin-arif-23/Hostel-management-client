import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Page/Home";
import Blog from "../Page/Blog";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import All_Dashboards_ from "../Dashboard/All_Dashboards_";
import MyProfile from "../Dashboard/UserDashboard/MyProfile";
import RequestedMeals from "../Dashboard/UserDashboard/RequestedMeals";
import MyReviews from "../Dashboard/UserDashboard/MyReviews";
import PaymentHistory from "../Dashboard/UserDashboard/PaymentHistory";

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
  },
  {
    path:'/dashboard',
    element:<All_Dashboards_ />,
    children:[
      {
        path:'myprofile',
        element:<MyProfile />,
      },
      {
        path:'requestedMeals',
        element:<RequestedMeals />,
      },
      {
        path:'myreview',
        element:<MyReviews />,
      },
      {
        path:'paymenthistory',
        element:<PaymentHistory />,
      },
    ]
  }
])