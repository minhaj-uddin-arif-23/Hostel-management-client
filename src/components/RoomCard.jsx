import React from "react";
import { Link } from "react-router-dom";
import { IoWifiOutline } from "react-icons/io5";
import { MdTv } from "react-icons/md";
import { GiMeal } from "react-icons/gi";
import { FaSnowflake } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
export default function RoomCard({ roomData }) {
  const { name, image, rating, price, Sdes, capacity } = roomData || {};

  return (
    <div className="flex justify-center">
      <div className="card card-compact w-80 bg-white shadow-xl border rounded-lg">
        <figure>
          <img
            src={image}
            className="w-full h-52 object-cover rounded-t-lg transition-transform duration-300 ease-in-out hover:scale-105"
            alt="Room"
          />
        </figure>
        <div className="card-body p-4">
          <h2 className="card-title text-xl font-bold text-gray-800">{name}</h2>
          <p className="text-sm text-gray-600 font-medium mb-3">{Sdes}</p>
          <div className="flex justify-between items-center mb-3">
            <p className="font-semibold text-lg text-blue-600">${price}/night</p>
            <p className="font-semibold text-sm text-gray-700 flex items-center gap-1">
              <i className="fas fa-star text-yellow-700 text-xl">< CiStar /></i> {rating}  
            </p>
          </div>
          <div className="flex justify-start items-center gap-2 mb-4">
            {/* Capacity */}
            <span className="bg-gray-100 px-3 py-1 rounded-lg text-sm text-gray-600 font-medium flex items-center gap-1">
              <i className="fas fa-user-friends text-blue-500"></i> {capacity} Guests
            </span>
            {/* Facilities */}
            <div className="flex gap-3">
              <i className="fas fa-wifi text-blue-500 text-lg" title="Free WiFi"><IoWifiOutline /></i>
              <i className="fas fa-tv text-blue-500 text-lg" title="Flat-screen TV"><MdTv /></i>
              <i className="fas fa-utensils text-blue-500 text-lg" title="Meals Included"> <GiMeal /> </i>
              <i className="fas fa-snowflake text-blue-500 text-lg" title="Air Conditioning"> <FaSnowflake /> </i>
            </div>
          </div>
          <div className="card-actions flex justify-between">
            <Link
              to={`/rooms/${roomData.id}`}
              className="btn btn-sm btn-outline border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors"
            >
              View Details
            </Link>
            <button
              className="btn btn-sm bg-yellow-500 border-none text-white hover:bg-yellow-600 transition-colors"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
