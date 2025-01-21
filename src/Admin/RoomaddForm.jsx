import React, { useState } from "react";
import useAxiosSecure from "../Hook/useAxiosSecure";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { IoIosStarOutline } from "react-icons/io";

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
    <div>
      <form onSubmit={roomAddsubmit}>
        {/* Email Field */}
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text text-lg">Room Name*</span>
          </label>
          <input
            name="name"
            type="text"
            placeholder="Type room name"
            className="input input-info"
            required
          />
        </div>
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text text-lg">Image*</span>
          </label>
          <input
            name="image"
            type="url"
            placeholder="upload room image"
            className="input input-info"
            required
          />
        </div>
        {/* image */}

        {/* rating  start */}
        <div className="form-control">
          <label className="label justify-center">
            <span className="label-text font-medium text-gray-700">
              Rate This MeRoom
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
        
        {/* rating  end */}
        {/* price */}
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text text-lg">Price*</span>
          </label>
          <input
            name="price"
            type="number"
            placeholder="price"
            className="input input-info"
            required
          />
        </div>
        {/* capacity */}
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text text-lg">Capacity*</span>
          </label>
          <input
            name="capacity"
            type="number"
            placeholder="capacity"
            className="input input-info"
            required
          />
        </div>
        {/* description */}
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text text-lg">Description*</span>
          </label>
          <input
            name="Sdes"
            type="text"
            placeholder="Write.."
            className="input input-info"
            required
          />
        </div>

        {/* Login Button */}
        <div className="form-control">
          <button className="btn bg-lime-400 text-black font-medium w-full">
            Add Room
          </button>
        </div>
      </form>
    </div>
  );
}
