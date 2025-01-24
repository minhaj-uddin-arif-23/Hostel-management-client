import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GoogleAuthProvider } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import register from "../assets/register.svg";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
// import imageUpload from '../../ '
// import { Helmet } from "react-helmet";
// import { AuthContext } from "../Shared_Context/AuthProvider";
// import Lottie from "lottie-react";
import { Helmet } from "react-helmet";
import useAuth from "../Hook/useAuth";
import { auth } from "../firebase/_firebase_init";
import { imageUpload } from "./../Shared/Image_api";

export default function Register() {
  const { google, createUser, updateUserInfo } = useAuth();
  const [user, setUser] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [success, setSuccess] = useState(false);
  // state for password eye show
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleRegister = async (e) => {
    e.preventDefault();

    const Name = e.target.name.value;
    const Email = e.target.email.value;
    const Password = e.target.password.value;

    const acceptTearm = e.target.checked.checked;
    const image = e.target.image.files[0];
    const photoURL = await imageUpload(image);
    // console.log(photoURL);
    setErrorMsg("");
    setSuccess(false);
    if (!acceptTearm) {
      setErrorMsg("please accept the tearm & conditon");
      return;
    }
    if (Password.length < 6) {
      setErrorMsg("Password Should be at least 6 character");
      return;
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(Password)) {
      setErrorMsg("Password should be at least one uppercase one lowecase ");
      return;
    }
    // create user, email and password
    try {
      await createUser(Email, Password).then((result) => {
        if (photoURL) {
          updateUserInfo(Name, photoURL);
          setUser({ ...result.user, photoURL: photoURL, displayName: Name });
          toast.success("Registration successfully");
          navigate("/");
        }
      });
    } catch (err) {
      toast.error(err?.message);
    }
    // console.log(Name,Email,Password,photoURL)
  };

  //sign google and github

  const provider = new GoogleAuthProvider();

  // const provider2 = new GithubAuthProvider();
  const handleGoogleLogin = () => {
    google(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        setUser(err.message);
      });
  };
  // const handleGitHuLogin = () => {
  //   signInWithPopup(auth, provider2)
  //     .then((result) => {
  //       const user = result.user;

  //       setUser(user)
  //     })
  //     .catch((err) => {

  //       setUser(err,message)
  //     });
  // };
  //sign google and github

  return (
    <div className="hero bg-base-200 min-h-screen py-10">
      <Helmet>
        <title>Register</title>
      </Helmet>
      {/* <div className="flex flex-col lg:flex-row-reverse items-center justify-center"> */}
      {/* Lottie Animation */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img src={register} className="w-700" alt="" />
      </div>

      {/* Registration Form */}
      <div className="w-full lg:w-1/2 px-6">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Title */}
          <h1 className="font-semibold text-4xl text-center text-gray-800 mb-4">
            Register
          </h1>

          {/* Google Login Button */}
          <div className="flex justify-center mb-6">
            <button
              onClick={handleGoogleLogin}
              className="border-2 border-gray-300 text-2xl rounded-full flex items-center justify-center px-4 py-2 hover:bg-gray-100 transition"
            >
              <FcGoogle className="text-3xl" />
              <span className="ml-2 text-gray-600">Sign in with Google</span>
            </button>
          </div>

          {/* Registration Form */}
          <form onSubmit={handleRegister}>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name and Photo */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Username"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg">Image</span>
                </label>
                <input
                  name="image"
                  type="file"
                  placeholder="Photo URL"
                  className=""
                  required
                />
              </div>

              {/* Email and Password */}
              <div className="form-control">
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
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text text-lg">Password</span>
                </label>
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
                <div
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-2/3 right-3 transform -translate-y-1/2 cursor-pointer"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
            </section>

            {/* Terms and Conditions */}
            <div className="form-control mt-6">
              <label className="label cursor-pointer flex items-center gap-2">
                <input type="checkbox" name="checked" className="checkbox" />
                <span className="label-text">Accept Terms & Conditions</span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="form-control mt-4">
              <button className="btn btn-success w-full">Sign Up</button>
            </div>

            {/* Error Message */}
            {errorMsg && (
              <p className="text-red-500 mt-2 text-center">{errorMsg}</p>
            )}

            {/* Redirect to Login */}
            <div className="mt-6 text-center">
              <p className="mb-2">Already have an account?</p>
              <Link to={`/login`} className="btn btn-outline btn-primary w-1/2">
                Sign In
              </Link>
            </div>
          </form>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}