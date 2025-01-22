import React, { useState } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import useAxiosSecure from "../Hook/useAxiosSecure";
import useAuth from "../Hook/useAuth";
import useAxiosPublic from "../Hook/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMGBB_API_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

export default function AddMealForm({ closeModal }) {
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useAuth();
  const { register, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic()
  const axiosSequre = useAxiosSecure();
  
  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0]};
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-Type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      // console.log(res)
      const menuItem = {
        title: data.title,
        category: data.category,
        image: res.data.data.display_url,
        price: parseFloat(data.price),
        email: user?.email,
        Ingredients: data.ingredients,
        Description: data.details,
        name: user?.displayName,
        StartDate: startDate,
        rating: 0,
        like: 0,
        review_count: 0,
      };

      const menuRes = await axiosSequre.post("/add-upcoming-meal", menuItem);
      // console.log(menuRes)
      if (menuRes?.data?.insertedId) {
        toast.success("Meal successfully added");
        // reset(); // Clear the form
        // console.log(menuRes?.data)
        closeModal(); // Close the modal
      } else {
        toast.error("Failed to add meal. Try again.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Title */}
      <label className="block">
        <span className="text-sm font-medium">Meal Title</span>
        <input
          type="text"
          {...register("title", { required: true })}
          placeholder="Enter meal title"
          className="input input-bordered w-full"
        />
      </label>

      {/* Category */}
      <label className="block">
        <span className="text-sm font-medium">Category</span>
        <select
          {...register("category", { required: true })}
          className="select select-bordered w-full"
        >
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
          <option value="Snack">All Meals</option>
        </select>
      </label>

      {/* Image Upload */}
      <label className="block">
        <span className="text-sm font-medium">Image</span>
        <input
          type="file"
          {...register("image", { required: true })}
          className="file-input file-input-bordered w-full"
        />
      </label>

      {/* Ingredients */}
      <label className="block">
        <span className="text-sm font-medium">Ingredients</span>
        <textarea
          {...register("ingredients", { required: true })}
          placeholder="Enter ingredients"
          className="textarea textarea-bordered w-full"
        />
      </label>

      {/* Description */}
      <label className="block">
        <span className="text-sm font-medium">Description</span>
        <textarea
          {...register("details", { required: true })}
          placeholder="Enter description"
          className="textarea textarea-bordered w-full"
        />
      </label>

      {/* Price */}
      <label className="block">
        <span className="text-sm font-medium">Price</span>
        <input
          type="number"
          {...register("price", { required: true })}
          placeholder="Enter price"
          className="input input-bordered w-full"
        />
      </label>

      {/* Date Picker */}
      <label className="block">
        <span className="text-sm font-medium">Date</span>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          className="input input-bordered w-full"
        />
      </label>
      <div>
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text">Admin Name</span>
                </div>
                <input
                  {...register("name")}
                  type="text"
                  placeholder="name"
                  defaultValue={user?.displayName}
                  readOnly
                  className="input input-info w-full "
                />
              </label>
            </div>
            {/* email  */}
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

      {/* Submit Button */}
      <button type="submit" className="btn btn-success w-full">
        Add Meal
      </button>
    </form>
  );
}
