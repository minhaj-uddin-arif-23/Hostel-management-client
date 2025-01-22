import React, { useState } from "react";
// import useMeal from "../Hook/useMeal";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../Hook/useAxiosPublic";
import { Link, useParams } from "react-router-dom";
import { SlLike } from "react-icons/sl";
import ShowReview from "../components/ShowReview";
import useAxiosSecure from "../Hook/useAxiosSecure";
import toast from "react-hot-toast";
import useAuth from "../Hook/useAuth";
import useAdmin from "../Hook/useAdmin";
import Navbar from "../components/Navbar";

function MealDetails() {
  const [isAdmin] = useAdmin();
  const { user } = useAuth();
  const [count, setCount] = useState(1);
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();
  const axiosSequre = useAxiosSecure();
  // show meal details
  const { data: mealDetails = [] } = useQuery({
    queryKey: ["mealDetails"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/meal/${id}`);
      return res.data;
    },
  });
  // show meal request
  const { data: review = [] } = useQuery({
    queryKey: ["review"],
    queryFn: async () => {
      const { data } = await axiosSequre.get(`/show-all-meal/${id}`);
      return data;
    },
  });

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
  } = mealDetails || {};
  // * LIKE BUTTON INCREASE
  const handleLike = async () => {
    try {
      const response = await axiosSequre.patch(`/meal/like/${_id}`, {
        userEmail: user?.email,
      });

      if (response.data.modifiedCount > 0) {
        toast.success("You liked this meal!");
        // Optionally update the UI (increment the like count locally)
      }
    } catch (error) {
      if (error.response?.status === 400) {
        toast.error(error.response.data.message); // "You have already liked this meal."
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    }
  };
  // meal request 
  const mealrequestAdd = async () => {
    try {
      // Construct the meal request object
      const mealRequest = {
        title,
        like,
        review_count,
        status: "requested",
        User: {
          name: user?.displayName,
          email: user?.email,
          image: user?.photoURL,
        },
      };
  
      // Send the meal request to the server
      const res = await axiosSequre.post(`/user-requests/${user?.email}`, mealRequest);
  
      if (res.data?.success === true ) {
        toast.success("Your meal request is pending");
      } else {
        toast.error( "Failed to add meal request");
      }
    } catch (error) {
      console.error(error);
      toast.error("You have no subscription ");
    }
  };
  

  const handleToast = () => {
    toast.error("Sorry you are  admin");
  };
  const handleMealRequest = () => {
    toast.error("Sorry you are  admin");
  };

  //    * like if he/she is admin
  // const handleLiked = () => {
  //   toast.error("Sorry you are admin! you can not like this email")
  // }

  return (
    <div>
      {/* <div>
        <Navbar />
      </div> */}
      <div className="flex items-center justify-center mt-10 px-4">
        <div className="card bg-white shadow-xl w-full max-w-lg rounded-lg overflow-hidden">
          {/* Image Section */}
          <figure>
            <img
              src={image}
              alt="Meal"
              className="w-full h-60 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </figure>

          {/* Content Section */}
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
            <p className="text-gray-600 text-sm mb-4">{name}</p>
            <p className="text-gray-700 mb-4">{Description}</p>

            {/* Date & Rating */}
            <div className="flex justify-between items-center text-gray-600 mb-4">
              <p className="text-sm font-medium">{StartDate}</p>
              <p className="text-sm font-medium">Rating: {rating}⭐</p>
            </div>

            {/* Buttons  meal request */}
            <div className="flex items-center gap-4 mb-4">
              <button
                onClick={handleLike}
                className="btn btn-sm bg-blue-500 text-white hover:bg-blue-600 flex items-center gap-2"
              >
                <SlLike className="text-lg" />
                {like}
              </button>
              {/* meal request */}
              {isAdmin ? (
                <button
                  onClick={handleMealRequest}
                  className="btn btn-sm bg-green-500 text-white hover:bg-green-600"
                >
                  Meal Request
                </button>
              ) : (
                <button
                  onClick={mealrequestAdd}
                  className="btn btn-sm bg-green-500 text-white hover:bg-green-600"
                >
                  Meal Request
                </button>
              )}
            </div>

            {/* Price & Reviews */}
            <div className="flex justify-between items-center mb-4">
              <p className="text-lg font-semibold text-blue-600">${price}</p>
              <p className="text-lg font-semibold text-gray-800">
                Reviews: {review.length}
              </p>
            </div>

            {/* Feedback Button */}
            <div className="text-center">
              {isAdmin ? (
                <button
                  onClick={handleToast}
                  className="btn btn-outline border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
                >
                  Give me some Feedback
                </button>
              ) : (
                <Link
                  to={`/addreview/${_id}`}
                  className="btn btn-outline border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
                >
                  Give me some Feedback
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      <div>
        {/* show review this */}
        <ShowReview reviews={review} />
      </div>
    </div>
  );
}

export default MealDetails;
