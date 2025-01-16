import React, { useState } from "react";
import { IoIosStarOutline } from "react-icons/io";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import useAuth from "../Hook/useAuth";
import useAxiosPublic from "../Hook/useAxiosPublic";
// import NavbarExtra from "../Components/NavbarExtra";
export default function PostReview() {
  const { user } = useAuth();
  // const email = user?.email
  const { id } = useParams();
  const [startDate, setStartDate] = useState(new Date());
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const navigate = useNavigate();

  const location = useLocation();
  const { title } = location.state || {};
  const axiosPublic = useAxiosPublic();
  const addToReview = async (e) => {
    e.preventDefault();
    const form = e.target;
    const text = form.details.value;
    const rating = form.rating.value;
    const review = {
      title,
      text,
      rating,
      Like:0,
      user: {
        email: user?.email,
        name: user?.displayName,
        photo: user?.photoURL,
      },
      startDate,
      meal_id: id,
    };

    try {
      await axiosPublic.post(`/add-review`, review);
      toast.success("Thanks to your valuable feedback!!");
      navigate("/");
    } catch (err) {
      toast.error("You can some mistake");
    }
  };

  return (
    <>
      {/* <div className="w-full mx-auto z-50 top-0 fixed">
        <NavbarExtra />
    </div> */}
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-lime-50 via-yellow-50 to-pink-100">
        <div className="card w-full max-w-lg shadow-xl p-6 rounded-lg bg-gradient-to-r from-blue-200 to-blue-300">
          <h1 className="text-3xl font-bold text-center mb-4 text-gray-800">
            Review This Meal
          </h1>
          <form onSubmit={addToReview} className="space-y-6">
            {/* Rating */}
            <div className="form-control">
              <label className="label justify-center">
                <span className="label-text font-medium text-gray-700">
                  Rate This Meal
                </span>
              </label>
              <div className="flex justify-center space-x-2">
                {[...Array(5)].map((_, index) => {
                  const currentRating = index + 1;
                  return (
                    <label key={index} className="cursor-pointer">
                      <input
                        type="radio"
                        name="rating"
                        value={currentRating}
                        className="hidden"
                        onClick={() => setRating(currentRating)}
                      />
                      <IoIosStarOutline
                        className="transition duration-300"
                        color={
                          currentRating <= (hover || rating)
                            ? "#f59e0b"
                            : "#e5e7eb"
                        }
                        onMouseEnter={() => setHover(currentRating)}
                        onMouseLeave={() => setHover(null)}
                        size={35}
                      />
                    </label>
                  );
                })}
              </div>
            </div>

            <div>
              <p className="text-2xl font-semibold">{title}</p>
            </div>
            {/* Review Text */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium text-gray-700">
                  Review
                </span>
              </label>
              <textarea
                name="details"
                className="textarea textarea-info w-full"
                placeholder="Write your review here..."
              ></textarea>
            </div>

            {/* Date */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium text-gray-700">
                  Date
                </span>
              </label>
              <DatePicker
                selected={startDate}
                className="input input-info w-full"
                onChange={(date) => setStartDate(date)} //only when value has changed
              />
            </div>

            {/* Submit Button */}
            <div className="form-control mt-4">
              <button className="btn bg-lime-400 text-black hover:bg-lime-500 w-full">
                Save Review
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
