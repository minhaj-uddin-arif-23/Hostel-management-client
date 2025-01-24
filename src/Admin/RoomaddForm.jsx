import React, { useState } from "react";
import useAxiosSecure from "../Hook/useAxiosSecure";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { IoIosStarOutline } from "react-icons/io";
import { Helmet } from "react-helmet";

export default function RoomaddForm() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const axiosSecure = useAxiosSecure()
  const navigate = useNavigate()
  // 
  const roomAddsubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const rating = form.rating.value;
    const price = form.price.value;
    const capacity = form.capacity.value;
    const Sdes = form.Sdes.value;

    const roomdata = { name, image, rating, price, Sdes,capacity };
    console.log("roomdata is ->",roomdata);

    try{
      await axiosSecure.post('/add-room',roomdata)
      toast.success("Room added this hostel")
      navigate('/')
    }catch(err){
          toast.error('room add some mistake ')
    }
  };
  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
       <div>
        <Helmet>
          <title>Hostel Management | Add Room </title>
        </Helmet>
      </div>
    <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Add a New Room</h2>
    <form onSubmit={roomAddsubmit} className="space-y-5">
      {/* Room Name */}
      <div className="form-control">
        <label className="label">
          <span className="label-text text-lg font-medium text-gray-700">Room Name*</span>
        </label>
        <input
          name="name"
          type="text"
          placeholder="Type room name"
          className="input input-info input-bordered w-full"
          required
        />
      </div>
  
      {/* Image */}
      <div className="form-control">
        <label className="label">
          <span className="label-text text-lg font-medium text-gray-700">Image URL*</span>
        </label>
        <input
          name="image"
          type="url"
          placeholder="Upload room image"
          className="input input-info input-bordered w-full"
          required
        />
      </div>
  
      {/* Rating */}
      <div className="form-control">
        <label className="label justify-center">
          <span className="label-text font-medium text-gray-700">Rate This Room</span>
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
                    currentRating <= (hover || rating) ? "#f59e0b" : "#e5e7eb"
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
  
      {/* Price */}
      <div className="form-control">
        <label className="label">
          <span className="label-text text-lg font-medium text-gray-700">Price*</span>
        </label>
        <input
          name="price"
          type="number"
          placeholder="Price per night"
          className="input input-info input-bordered w-full"
          required
        />
      </div>
  
      {/* Capacity */}
      <div className="form-control">
        <label className="label">
          <span className="label-text text-lg font-medium text-gray-700">Capacity*</span>
        </label>
        <input
          name="capacity"
          type="number"
          placeholder="Number of guests"
          className="input input-info input-bordered w-full"
          required
        />
      </div>
  
      {/* Description */}
      <div className="form-control">
        <label className="label">
          <span className="label-text text-lg font-medium text-gray-700">Description*</span>
        </label>
        <textarea
          name="Sdes"
          rows="4"
          placeholder="Write a brief description..."
          className="textarea textarea-info w-full"
          required
        ></textarea>
      </div>
  
      {/* Submit Button */}
      <div className="form-control">
        <button className="btn bg-lime-500 text-white font-medium hover:bg-lime-600 w-full">
          Add Room
        </button>
      </div>
    </form>
  </div>
  
  );
}
