import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaUser, FaUtensils, FaListAlt, FaTasks, FaCalendarAlt, FaStar, FaUsers, FaHome } from "react-icons/fa";
import { MdOutlineBathroom } from "react-icons/md";
import { MdRateReview, MdPayment } from "react-icons/md";
import useAdmin from "../Hook/useAdmin";

export default function DashboardNavbar() {
  const [isAdmin] = useAdmin();

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r hidden lg:block">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-700">Admin Dashboard</h2>
        </div>
        <nav>
          <ul className="space-y-2 px-6">
            {isAdmin ? (
              <>
                <li>
                  <NavLink
                    to={`adminprofile`}
                    className="flex items-center p-2 text-sm font-medium text-gray-700 hover:bg-gray-200 rounded-md"
                  >
                    <FaUser className="mr-3" />
                    Admin Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={`addmeals`}
                    className="flex items-center p-2 text-sm font-medium text-gray-700 hover:bg-gray-200 rounded-md"
                  >
                    <FaUtensils className="mr-3" />
                    Add Meal
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={`allmeals`}
                    className="flex items-center p-2 text-sm font-medium text-gray-700 hover:bg-gray-200 rounded-md"
                  >
                    <FaListAlt className="mr-3" />
                    All Meals
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={`servemeals`}
                    className="flex items-center p-2 text-sm font-medium text-gray-700 hover:bg-gray-200 rounded-md"
                  >
                    <FaTasks className="mr-3" />
                    Serve Meals
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={`upcomingmeals`}
                    className="flex items-center p-2 text-sm font-medium text-gray-700 hover:bg-gray-200 rounded-md"
                  >
                    <FaCalendarAlt className="mr-3" />
                    Upcoming Meals
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={`allreviews`}
                    className="flex items-center p-2 text-sm font-medium text-gray-700 hover:bg-gray-200 rounded-md"
                  >
                    <MdRateReview className="mr-3" />
                    All Reviews
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={`manageusers`}
                    className="flex items-center p-2 text-sm font-medium text-gray-700 hover:bg-gray-200 rounded-md"
                  >
                    <FaUsers className="mr-3" />
                    Manage Users
                  </NavLink>

                  
                  
                </li>
                <li>
                  <NavLink
                    to={`addroom`}
                    className="flex items-center p-2 text-sm font-medium text-gray-700 hover:bg-gray-200 rounded-md"
                  >
                    <MdOutlineBathroom className="mr-3" />
                    Add Room
                  </NavLink>
                </li>
              </>
            ) : (
              // user related route
              <>
                <li>
                  <NavLink
                    to={`myprofile`}
                    className="flex items-center p-2 text-sm font-medium text-gray-700 hover:bg-gray-200 rounded-md"
                  >
                    <FaUser className="mr-3" />
                    My Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={`requestedMeals`}
                    className="flex items-center p-2 text-sm font-medium text-gray-700 hover:bg-gray-200 rounded-md"
                  >
                    <FaUtensils className="mr-3" />
                    Requested Meals
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={`myreview`}
                    className="flex items-center p-2 text-sm font-medium text-gray-700 hover:bg-gray-200 rounded-md"
                  >
                    <MdRateReview className="mr-3" />
                    My Reviews
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={`paymenthistory`}
                    className="flex items-center p-2 text-sm font-medium text-gray-700 hover:bg-gray-200 rounded-md"
                  >
                    <MdPayment className="mr-3" />
                    Payment History
                  </NavLink>
                </li>
              </>
            )}
            <li>
              <NavLink
                to={'/'}
                className="flex items-center p-2 text-sm font-medium text-gray-700 hover:bg-gray-200 rounded-md"
              >
                <FaHome className="mr-3" />
                Home
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Mobile Sidebar */}
      <div className="lg:hidden fixed top-0 left-0 bg-white shadow-md w-64 h-screen z-50 transition-transform transform -translate-x-full">
        {/* Add toggle functionality for mobile */}
      </div>

      {/* Main Content */}
      <main className="flex-1">
        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
