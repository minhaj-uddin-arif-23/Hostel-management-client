import React from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hook/useAuth";
import { FaUserCircle, FaHome, FaDoorOpen, FaBlog } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { MdRestaurantMenu } from "react-icons/md";
import { HiBadgeCheck } from "react-icons/hi";

function Navbar() {
  const { user, signout } = useAuth();

  return (
    <>
      <div className="navbar px-20 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="lg:hidden">
              <button>
                <label
                  htmlFor="check"
                  className="flex flex-col gap-[5px] p-3 rounded-lg hover:bg-sky-100 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    id="check"
                    className="peer/check hidden"
                  />
                  <span className="w-10 h-1 rounded-lg inline-block bg-sky-700 peer-checked/check:rotate-45 peer-checked/check:translate-y-2 duration-300"></span>
                  <span className="w-10 h-1 rounded-lg inline-block bg-sky-700 peer-checked/check:scale-0 duration-300"></span>
                  <span className="w-10 h-1 rounded-lg inline-block bg-sky-700 peer-checked/check:-rotate-45 peer-checked/check:-translate-y-2 duration-300"></span>
                </label>
              </button>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/allmeals">Meals</NavLink>
              </li>
              <li>
                <NavLink to="/upcomingmeals">Upcoming Meals</NavLink>
              </li>
              <li>
                <NavLink to="/room">Room</NavLink>
              </li>
              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <li className="mt-4 text-lg">
                <IoMdNotifications />
              </li>
              <div className="flex">
                {user && user?.email ? (
                  <div className="flex gap-2">
                    <Link to="/profile" className="flex gap-3 relative">
                      <img
                        src={user?.photoURL}
                        className="w-10 h-10 rounded-full"
                        title={user?.displayName}
                        alt=""
                      />
                      <span className="absolute bottom-[2px] right-0 size-3 rounded-full border-[2px] border-white bg-green-500"></span>
                    </Link>
                    <button onClick={signout} className="btn bg-pink-600">
                      Sign Out
                    </button>
                  </div>
                ) : (
                  <div className="mt-3">
                    <FaUserCircle />
                    <div className="flex gap-3">
                      <Link to="/login" className="btn font-semibold text-md">
                        Sign in
                      </Link>
                      <Link to="/registration" className="btn font-semibold text-md">
                        Register
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </ul>
          </div>
          <Link
            to="/"
            className="text-2xl font-semibold flex items-center gap-3 lg:ml-2 md:mr-5"
          >
            <HiBadgeCheck /> HOSTEL <span className="text-pink-500">GRUB</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="flex gap-5 font-medium text-lg">
            <NavLink to="/" className="flex items-center gap-2">
              <FaHome /> Home
            </NavLink>
            <NavLink to="/allmeals" className="flex items-center gap-2">
              <MdRestaurantMenu /> Meals
            </NavLink>
            <NavLink to="/upcomingmeals" className="flex items-center gap-2">
              <MdRestaurantMenu /> Upcoming Meals
            </NavLink>
            <NavLink to="/room" className="flex items-center gap-2">
              <FaDoorOpen /> Room
            </NavLink>
            <NavLink to="/blog" className="flex items-center gap-2">
              <FaBlog /> Blog
            </NavLink>
          </div>
        </div>
        <div className="navbar-end gap-3">
          <div className="flex">
            {user && user?.email ? (
              <div className="flex gap-2 relative">
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <Link>
                        <img
                          src={user?.photoURL}
                          className="w-10 h-10 rounded-full"
                          referrerPolicy="no-refferer"
                          alt=""
                        />
                        <span className="absolute bottom-[2px] right-0 size-3 rounded-full border-[2px] border-white bg-green-500"></span>
                      </Link>
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content bg-base-100 rounded-box z-[10] mt-3 w-52 p-2 shadow"
                  >
                    <li>
                      <p className="justify-between">
                        <span className="ml-5 flex items-center justify-center font-semibold text-blue-800">
                          {user?.displayName}
                        </span>
                      </p>
                    </li>
                    <li>
                      <Link
                        to="dashboard"
                        className="btn btn-sm text-blue-900 font-semibold text-md my-2 ml-12"
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={signout}
                        className="btn btn-sm text-blue-900 font-semibold text-md ml-12 mb-2"
                      >
                        Sign Out
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="flex gap-3 mt-3 hidden md:block lg:block">
                <Link
                  to="/login"
                  className="border-2 btn btn-sm text-blue-900 font-semibold text-md"
                >
                  Sign in
                </Link>
                <Link
                  to="/registration"
                  className="border-2 btn btn-sm text-blue-900 font-semibold text-md px-2"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
