import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa6";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import useAxiosPublic from "../Hook/useAxiosPublic";
import useAxiosSecure from "../Hook/useAxiosSecure";
import useAuth from "../Hook/useAuth";
const image_hosting_key = import.meta.env.VITE_IMGBB_API_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

// axiosSequre

export default function AddMeal() {
  // -------------------
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useAuth();
  const { register, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSequre = useAxiosSecure();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    // console.log(data);
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-Type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const menuItem = {
        title: data.title,
        category: data.category,
        image: res.data.data.display_url,
        price:parseFloat(data.price),
        email: user?.email,
        Ingredients:data.ingredients,
        Description: data.details,
        StartDate:startDate,
        rating:0,
        like:0,
        review_count:0
      };
      // const token = localStorage.getItem("Access-token"); // get token in local storage
      const menuRes = await axiosSequre.post("/add-meal", menuItem);
      
console.log(menuRes)
      // console.log(menuRes.data);
      if (menuRes?.data?.insertedId) {
        // reset()
        toast.success("Menu item added");
        console.log(menuRes?.data?.insertedId)
        navigate("/");
      }
    }
    // console.log(res.data);
  };

  return (
    <div>
      <div className="text-center text-4xl font-semibold text-lime-300">
        <h1>What's new</h1>
        <p>ADD ITEM</p>
      </div>
      {/*  react hook form */}
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="my-10">
            {/* title */}
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Title</span>
              </div>
              <input
                {...register("title", { required: true })}
                type="text"
                placeholder="recipe name"
                className="input input-info w-full "
              />
            </label>
          </div>
          <div className="flex gap-6">
            {/* category */}
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Category</span>
              </div>
              <select
                defaultValue="default"
                className="select select-primary w-full "
                {...register("category", { required: true })}
              >
                <option disabled value="default">
                  Select a category
                </option>
                <option value="salad">Cake</option>
                <option value="pizza">Fish</option>
                <option value="soup">Beef</option>
                <option value="dessert">Vegetables</option>
                <option value="drinks">Egg</option>
                <option value="drinks">Juice</option>
              </select>
            </label>
            {/* ingredients */}
        


            {/* price */}
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Email</span>
              </div>
              <input
                {...register("email")}
                type="email"
                placeholder="email"
                defaultValue={user?.email}
                readOnly
                className="input input-info w-full "
              />
            </label>
          </div>
          {/* text area */}

          <div className="my-10">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Meals Details</span>
              </div>
              <textarea
                {...register("details")}
                className="textarea textarea-info"
                placeholder="recipe details"
              ></textarea>
            </label>
          </div>
          {/* price */}
          {/* price */}
      <div className="flex gap-4">
      <label className="form-control w-1/2 ">
            <div className="label">
              <span className="label-text">Price*</span>
            </div>
            <input
              {...register("price", { required: true })}
              type="number"
              placeholder="price"
              className="input input-info w-full "
            />
          </label>
          {/* admin name */}
          <div>
          <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Admin Name</span>
              </div>
              <input
                {...register("email")}
                type="email"
                placeholder="email"
                defaultValue={user?.displayName}
                readOnly
                className="input input-info w-full "
              />
            </label>
          </div>
            <div>
              <div>
                
              </div>
               {/* Date Picker */}
     
            </div>
      </div>
      <div>
      <div className="flex gap-5">
            <label className="form-control w-1/2 ">
              <div className="label">
                <span className="label-text">Ingredients</span>
              </div>
              <input
                {...register("ingredients", { required: true })}
                type="text"
                placeholder="recipe name"
                className="input input-info w-full "
              />
            </label>
            {/* date */}
            <div className="form-control mt-9 w-1/2">
        <DatePicker
          selected={startDate}
          className="input input-bordered input-success w-full"
          onChange={(date) => setStartDate(date)} //only when value has changed
        />
      </div>
            </div>
      </div>

          {/* image upload  */}
          <div>
            <div className="form-control w-full mt-3">
              <input
                type="file"
                {...register("image")}
                className="file-input file-input-bordered file-input-warning w-full max-w-xs"
              />
            </div>
            {/* add button */}
            <button className="btn mt-4">
              Add Meal <FaUtensils className="ml-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}