import React, { useContext } from "react";
// import login from '../assets/login.json'
// import Lottie from "lottie-react";
import login from '../assets/login.svg'
import { useLocation, useNavigate } from "react-router-dom";
// import { AuthContext } from "../Shared_Context/AuthProvider";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../Hook/useAuth";
export default function Login() {

  const navigate = useNavigate()
  const location =useLocation()
  const from = location?.state || '/'
  // const {signIn,google} = useContext(AuthContext)
  const {signIn,google} = useAuth()

  const handleGoogle = async () => {
   try{
    await google()
    toast.success("Sign in successfuly")
    navigate(from,{replace:true})
   }catch(err){
    toast.error(err?.message)
   }
  }

  const handleSignIn =async (e) => {
    e.preventDefault()
    const form = e.target;
    const email= form.email.value
    const password= form.password.value

    try{
      await signIn(email,password)
      toast.success("SignIn successfullt")
      navigate(from , {replace:true})
    }catch(err){
      toast.error(err?.message)
    }
  }  

  return (
    <div className="hero bg-base-200 min-h-screen py-10">
    <Helmet>
      <title>Login</title>
    </Helmet>
    <div className="hero-content flex-col-reverse lg:flex-row-reverse items-center">
   
      
  
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-8">
      
        <h2 className="text-4xl font-semibold text-center mb-4">Sign In</h2>
  
        
        <p className="text-center text-gray-500 mb-4">Sign in with a social account</p>
        <div className="form-control mb-6">
          <button
            onClick={handleGoogle}
            className="border-2 border-gray-300 text-2xl rounded-full flex items-center justify-center py-2 px-4 hover:bg-gray-100 transition"
          >
            <FcGoogle className="text-3xl" />
            <span className="ml-2 text-gray-600">Sign in with Google</span>
          </button>
        </div>
  
        {/* Divider */}
        <div className="divider">OR</div>
  
        {/* Form */}
        <form onSubmit={handleSignIn}>
          {/* Email Field */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text text-lg">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="input input-bordered"
              required
            />
          </div>
  
          {/* Password Field */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text text-lg">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover text-sm">
                Forgot password?
              </a>
            </label>
          </div>
  
          {/* Login Button */}
          <div className="form-control">
            <button className="btn bg-lime-400 text-black font-medium w-full">
              Login
            </button>
          </div>
        </form>
      </div>
      <div className="text-center lg:text-left w-full lg:w-1/2 flex justify-center">
        {/* <Lottie animationData={login} className="max-w-xs lg:max-w-sm" /> */}
        <img src={login} alt="" className="w-[700px]" />
        
      </div>
    </div>
  </div>
  
  );
}