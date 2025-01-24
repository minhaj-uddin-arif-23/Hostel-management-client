import React, { useState } from "react";
import { SlLike } from "react-icons/sl";
import { Link } from "react-router-dom";

import toast from "react-hot-toast";
import useAxiosPublic from "../Hook/useAxiosPublic";

export default function UpcomingMealCard({ items, user }) {

  const {
    title,
    category,
    image,
    price,
    email,
    Ingredients,
    Description,
    name,
    like,
    StartDate,
    rating,
    review_count,
    _id,
  } = items || {};
    const axiosPublic = useAxiosPublic()
  const [isLiking, setIsLiking] = useState(false); 
  const [likes, setLikes] = useState(like); 
  
  const handleLike = async () => {
    if (isLiking) return; 
    setIsLiking(true);

    try {
      const response = await axiosPublic.patch(`/upcomingMeal/like/${_id}`, {
        userEmail: user?.email,
      });
      console.log('like count',res.data)
      if (response.data.modifiedCount > 0) {
        toast.success("You liked this meal!");
        setLikes((prevLikes) => prevLikes + 1); 
      }
    } catch (error) {
      if (error.response?.status === 400) {
        toast.error(error.response.data.message); 
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } finally {
      setIsLiking(false); 
    }
  };

  return (
    <div className="ml-12 md:ml-0">
      <div>
        <div className="card card-compact bg-white w-80 shadow-xl rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
          <figure>
            <img
              src={image}
              alt="Meal Plan"
              className="w-full h-48 object-cover rounded-t-lg transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </figure>
          <div className="card-body p-4">
            <h2 className="card-title text-xl font-bold text-gray-800 truncate">
              {title}
            </h2>

            <div className="flex justify-between items-center mt-3">
              <p className="font-semibold text-lg text-blue-600">${price}/month</p>
              <p className="font-semibold text-lg text-gray-700">
                Rating: {rating}⭐
              </p>
            </div>

            <div className="flex justify-between items-center mt-4">
              <button
                onClick={handleLike}
                disabled={isLiking} // Disable the button while loading
                className={`btn btn-sm btn-outline ${isLiking ? "bg-gray-500" : "hover:bg-blue-600"} flex items-center gap-2 rounded-full px-4 transition-all`}
              >
                <SlLike className="text-lg" />
                {likes}
              </button>

              <div className="card-actions mt-4">
                <Link
                  to={`/meal/${_id}`}
                  className="btn btn-sm btn-outline border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white transition-all py-2 px-4 rounded-full"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
