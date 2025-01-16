import React from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hook/useAuth";
import { FaUserCircle } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import profile from "../assets/profile.png";
import contact from "../assets/telephone.png";
import { HiBadgeCheck } from "react-icons/hi";
function Navbar() {
  const { user, signout } = useAuth();

  const link = (
    <>
      <div className="lg:flex gap-5 font-semibold uppercase ">
        <li>
          <NavLink to={`/`}>Home</NavLink>
        </li>
        <li>
          <NavLink to={`/about`}>About</NavLink>
        </li>
        <li>
          <NavLink to={`/Blog`}>Blog</NavLink>
        </li>
        <li>
          <NavLink to={`/contact`}>Contact us</NavLink>
        </li>
        <li>
          <NavLink to={`/seeAll`}>See All</NavLink>
        </li>
      </div>
      {/* <li><NavLink className={`/Blog`} >Blog</NavLink></li> */}
      {/* <li><NavLink className={`/AddPost`} >Blog</NavLink></li> */}
    </>
  );

  return (
    <>
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className=" lg:hidden">
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
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg> */}
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black"
            >
              {/* <div className="icon mt-2" onClick={change}>
              {state == "light-mode" ? (
                <i class="fa-solid fa-sun"></i>
              ) : (
                <i class="fa-solid fa-moon"></i>
              )}
            </div> */}
              <NavLink to={`/`} className="mt-2">
                Home
              </NavLink>
              <NavLink to={`/allMovie`} className="mt-2">
                All Movie
              </NavLink>
              <NavLink to={`/tv`} className="mt-2">
                Tv Show
              </NavLink>
              <NavLink to={`/blog`} className="mt-2">
                Blog
              </NavLink>
              {/* this is private route */}
              <NavLink to={`/addMovie`} className="mt-2">
                Add Movie
              </NavLink>
              <NavLink to={`/fovaurite`} className="mt-2">
                My Favorites
              </NavLink>

              <div className="flex">
                {user && user?.email ? (
                  <div className="flex gap-2  ">
                    <Link to={`/profile`} className="flex gap-3 relative ">
                      <img
                        src={user?.photoURL}
                        className="w-10 h-10 rounded-full relative"
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
                  <div className="mt-3 ">
                    <FaUserCircle />

                    {user && user?.email ? (
                      <button onClick={signout} className="btn ">
                        Sign Out
                      </button>
                    ) : (
                      <div className="flex gap-3">
                        <Link
                          to={`/login`}
                          className="btn  font-semibold text-md"
                        >
                          Sign in
                        </Link>
                        <div>
                          <Link
                            to={`/registration`}
                            className="btn  font-semibold text-md "
                          >
                            Register
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </ul>
          </div>
          <div className=" ">
            <Link
              to={`/`}
              className="w-96 text-2xl md:ml-2 flex gap-3 lg:ml-2 font-semibold  "
            >
              <p className="mt-1">
                <HiBadgeCheck />
              </p>
              HOSTEL <span className="text-pink-500">GRUB</span>
            </Link>
          </div>
        </div>
        <div className="navbar-center  lg:flex">
          <ul className="menu menu-horizontal px-1  invisible ">
            <div className="flex gap-5 font-medium text-lg invisible lg:visible ">
              <NavLink to={`/`} className="mt-2">
                Home
              </NavLink>
              <NavLink to={`/allmeals`} className="mt-2">
                Meals
              </NavLink>
              <NavLink to={`/addMovie`} className="mt-2">
                Upcoming Meals
              </NavLink>

              <NavLink to={`/blog`} className="mt-2">
                Join Us
              </NavLink>
              <NavLink to={`/tv`} className="mt-4 text-lg">
                <IoMdNotifications />
              </NavLink>
              {/* this is private route */}

              {/* <div className="icon mt-2" onClick={change}>
              {state == "light-mode" ? (
                <i class="fa-solid fa-sun"></i>
              ) : (
                <i class="fa-solid fa-moon"></i>
              )}
            </div> */}
            </div>
          </ul>
        </div>
        <div className=" navbar-end gap-3 invisible md:visible">
          {/* <div>
            <a href="#contact">
              {" "}
              <img
                src={contact}
                alt=""
                title="Contact us"
                className="w-10 mr-1"
              />
            </a>
          </div> */}
          <div className="flex">
            {user && user?.email ? (

              // *second dropdown ----------------------------------------

              // *second dropdown ----------------------------------------

              <div className="flex gap-2 relativ">
                {/* new dropdown */}
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
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                  >
                    <li>
                      <p className="justify-between">
                        <span className=" ml-9 flex items-center justify-center font-semibold text-blue-800 ">
                          {user?.displayName}
                        </span>
                      </p>
                    </li>
                    <li>
                      <Link
                        to={`dashboard`}
                        className="btn btn-sm  text-blue-900 font-semibold text-md my-2"
                      >
                        Dashboard
                        {/* <span className="badge">New</span> */}
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={signout}
                        className="  btn btn-sm  text-blue-900 font-semibold text-md"
                      >
                        Sign Out
                      </button>
                    </li>
                    <li>{/* <a>Logout</a> */}</li>
                  </ul>
                </div>
                {/* new  dropdown*/}
                {/* <Link to={`/profile`}>
                  <img
                    src={user?.photoURL}
                    className="w-10 h-10 rounded-full"
                    title={user?.displayName}
                    alt=""
                  />
                  <span className="absolute bottom-[2px] right-0 size-3 rounded-full border-[2px] border-white bg-green-500"></span>
                </Link> */}
              </div>
            ) : (
              <div className="mt-3 ">
                {/* <FaUserCircle /> */}
                {/* <img src={profile} alt="" className="w-6 " /> */}
              </div>
            )}
          </div>
          {user && user?.email ? (
            <>
              {/* <button
                onClick={signout}
                className=" border-2 btn btn-sm  text-blue-900 font-semibold text-md"
              >
                Sign Out
              </button> */}
            </>
          ) : (
            <div className="flex gap-3 mt-3">
              <Link
                to={`/login`}
                className=" border-2 btn btn-sm  text-blue-900 font-semibold text-md "
              >
                Sign in
              </Link>
              <div>
                <Link
                  to={`/registration`}
                  className=" border-2 btn btn-sm  text-blue-900 font-semibold text-md px-2"
                >
                  Register
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
