import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function DashboardNavbar() {
  const isAdmin = true
  return (
    <div className=" flex w-11/12 mx-auto mt-1 ">
      <div className=" w-64 bg-green-300 min-h-screen p-14 space-y-">
{/* admin route */}

<ul>
  {
    isAdmin ? <> 
    
          <li>
            <NavLink to={`adminprofile`} className='btn btn-sm  '>Admin Profile</NavLink>
          </li>
          <li>
            <NavLink to={`addmeals`} className='btn btn-sm my-3'>Add Meal</NavLink>
          </li>
          <li>
            <NavLink to={`allmeals`} className='btn btn-sm '>All Meals</NavLink>
          </li>
          <li>
            <NavLink to={`servemeals`} className='btn btn-sm mt-3 '>Serve Meals</NavLink>
          </li>
          {/* upcomingmeals */}
          <li>
            <NavLink to={`upcomingmeals`} className='btn btn-sm mt-3 '>Upcoming Meals</NavLink>
          </li>
       
          <li>
            <NavLink to={`allreviews`} className='btn btn-sm mt-3 '>All Reviews</NavLink>
          </li>
          <li>
            <NavLink to={`manageusers`} className='btn btn-sm mt-3 '>Manage Users</NavLink>
          </li>
    </>: <>
    
           <div className='divider'> </div>
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
          
       
       {/* all user and admin show */}

           <li>
            <NavLink to={'/'} className='btn btn-sm mt-3 '>Home</NavLink>
          </li>
     </>
  }
          
        </ul>
      
       
       


      </div>
      <div className="flex-1 p-20">
        <Outlet />
      </div>
    </div>
  );
}