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
  const mealrequest = async () => {
    try {
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
      await axiosSequre.post("/meal-request", mealRequest);
      toast.success("Your meal request in pending");
    } catch (error) {
      toast.error("Your meal request can not found");
    }
  };
  const handleToast = () => {
    toast.error("Sorry you are  admin")
  }

  return (
    <div>
      <div className="flex items-center justify-center mt-10">
        <div className="card card-compact bg-base-100  w-96 shadow-xl ">
          <figure>
            <img src={image} className="w-full object-cover" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{name}</p>
            <p>{Description}</p>
            <div className="flex justify-between">
              <p>{StartDate}</p>
              <p> Rating {rating}</p>
            </div>
            <button onClick={handleLike} className="btn btn-sm">
              <SlLike /> {like}
            </button>
            <button onClick={mealrequest} className="btn btn-sm">
              Meal Request
            </button>
            {/* <p>{}</p> */}
            <div className="flex justify-between">
              <p className="font-semibold text-lg">${price}</p>
              <p p className="font-semibold text-lg ml-28">
                Review : {review.length}
              </p>
            </div>
            <div className="btn btn-outline mt-5">
              {isAdmin ? (
                <button onClick={handleToast} >Give me some some Feedback</button>
              ) : (
                <Link to={`/addreview/${_id}`}>
                  {" "}
                  Give me some some Feedback
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
