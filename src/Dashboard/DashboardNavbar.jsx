import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function DashboardNavbar() {
  return (
    <div className=" flex w-11/12 mx-auto mt-1 ">
      <div className=" w-64 bg-green-300 min-h-screen p-14 space-y-">

    


        <ul>
          <li>
            <NavLink to={`myprofile`} className='btn btn-sm  '>My Profile</NavLink>
          </li>
          <li>
            <NavLink to={`requestedMeals`} className='btn btn-sm my-3'>Requested Meals</NavLink>
          </li>
          <li>
            <NavLink to={`myreview`} className='btn btn-sm '>My Reviews</NavLink>
          </li>
          <li>
            <NavLink to={`paymenthistory`} className='btn btn-sm mt-3 '>Payment History</NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-20">
        <Outlet />
      </div>
    </div>
  );
}
