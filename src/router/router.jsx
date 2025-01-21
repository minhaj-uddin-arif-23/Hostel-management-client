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
import AddMeal from "../Admin/AddMeal";
import AdminProfile from "../Admin/AdminProfile";
import AllMeals from "../Admin/AllMeals";
import AllReviews from "../Admin/AllReviews";
import ManageUsers from "../Admin/ManageUsers";
import ServeMeals from "../Admin/ServeMeals";
import UpcomingMeals from "../Admin/UpcomingMeals";
import MealDetails from "../meal/MealDetails";
import UpdateItem from "../Admin/UpdateItem";
import Silver_package from "../Package/Silver_package";
import Platinum_package from "../Package/Platinum_package";
import Gold from "../Package/Gold";
import Meals from "../meal/Meals";
import PostReview from "../components/PostReview";
import Payment from "../Dashboard/UserDashboard/Payment";
import PrivateRouter from "./PrivateRouter";
import AdminRoute from "./AdminRoute";
import UpComingmeals from "../components/UpComingmeals";
import Room from "../components/Room";
import RoomaddForm from "../Admin/RoomaddForm";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "allmeals",
        element: <Meals />,
      },
      {
        path:'upcomingmeals',
        element:<UpComingmeals />
      },
      {
        path:'room',
        element:<Room />
      },
      {
        path: "Blog",
        element: <Blog />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/registration",
    element: <Register />,
  },
  {
    path: "dashboard",
    element: (
      <PrivateRouter>
        <All_Dashboards_ />
      </PrivateRouter>
    ),
    children: [
      {
        path: "addmeals",
        element: (
          <AdminRoute>
            <AddMeal />
          </AdminRoute>
        ),
      },
      {
        path: "adminprofile",
        element: (
          <AdminRoute>
            <AdminProfile />
          </AdminRoute>
        ),
      },
      {
        path: "allmeals",
        element: (
          <AdminRoute>
            <AllMeals />
          </AdminRoute>
        ),
      },
      {
        path: "allreviews",
        element: (
          <AdminRoute>
            <AllReviews />
          </AdminRoute>
        ),
      },

      {
        path: "manageusers",
        element: (
          <AdminRoute>
            {" "}
            <ManageUsers />
          </AdminRoute>
        ),
      },
      {
        path: "servemeals",
        element: (
          <AdminRoute>
            <ServeMeals />
          </AdminRoute>
        ),
      },
      {
        path: "upcomingmeals",
        element: (
          <AdminRoute>
           
            <UpcomingMeals />
          </AdminRoute>
        ),
      },
      {
        path: "addroom",
        element: (
          <AdminRoute>
           
            <RoomaddForm />
          </AdminRoute>
        ),
      },
      // * user related navbar
      {
        path: "myprofile",
        element: (
          <PrivateRouter>
            <MyProfile />
          </PrivateRouter>
        ),
      },
      {
        path: "requestedMeals",
        element: (
          <PrivateRouter>
            <RequestedMeals />
          </PrivateRouter>
        ),
      },
      {
        path: "myreview",
        element: (
          <PrivateRouter>
            <MyReviews />
          </PrivateRouter>
        ),
      },
      {
        path: "paymenthistory",
        element: (
          <PrivateRouter>
            <PaymentHistory />
          </PrivateRouter>
        ),
      },
      {
        path: "updateItem/:id",
        element: <UpdateItem />,
        loader: ({ params }) =>
          fetch(`http://localhost:8000/meal-one-get/${params.id}`),
      },
    ],
  },
  {
    path: "/meal/:id",
    element: <MealDetails />,
  },
  {
    path: "/silver/:id",
    element: <Silver_package />,
  },
  {
    path: "/platinum/:id",
    element: <Platinum_package />,
  },
  {
    path: "/gold/:id",
    element: <Gold />,
  },
  // {
  //   path:'/review/:id',
  //   element:<PostReview />
  // }
  {
    path: "/addreview/:id",
    element: <PostReview />,
  },
  {
    path: "payment",
    element: <Payment />,
  },
]);
