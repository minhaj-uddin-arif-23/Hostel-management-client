import React from "react";
import { Link, useParams } from "react-router-dom";
import useAdmin from "../Hook/useAdmin";
import toast from "react-hot-toast";

function SubscriptionPlans() {
  const [isAdmin] = useAdmin();
  const { id } = useParams();
  const handleadmin = () => {
    toast.error("you are a admin!");
  };
  return (
    // TODO pass the price in props to pay money
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Silver Plan */}
      <div className="card bg-gray-100 w-80 shadow-lg border border-gray-300">
        <div className="card-body text-center">
          <h2 className="text-2xl font-bold text-gray-700">Silver Plan</h2>
          <p className="text-lg text-gray-600 my-3">
            Basic amenities for students
          </p>
          <p className="text-3xl font-bold text-gray-800 my-3">$50/month</p>
          <ul className="text-gray-600 mb-4">
            <li>✔️ Shared Room</li>
            <li>✔️ Free Wi-Fi</li>
            <li>✔️ Basic Meal Plan</li>
          </ul>
          {isAdmin ? (
            <button
              onClick={handleadmin}
              className="btn btn-outline btn-primary w-full"
            >
              Subscribe
            </button>
          ) : (
            <Link
              to={`/silver/${id}`}
              className="btn btn-outline btn-primary w-full"
            >
              Subscribe
            </Link>
          )}
        </div>
      </div>

      {/* Gold Plan */}
      <div className="card bg-yellow-100 w-80 shadow-lg border border-yellow-400">
        <div className="card-body text-center">
          <h2 className="text-2xl font-bold text-yellow-700">Gold Plan</h2>
          <p className="text-lg text-yellow-600 my-3">
            Enhanced comfort and services
          </p>
          <p className="text-3xl font-bold text-yellow-800 my-3">$100/month</p>
          <ul className="text-yellow-600 mb-4">
            <li>✔️ Semi-Private Room</li>
            <li>✔️ Free Wi-Fi</li>
            <li>✔️ Premium Meal Plan</li>
            <li>✔️ Laundry Service</li>
          </ul>
          {isAdmin ? (
            <button
              onClick={handleadmin}
              className="btn btn-outline btn-primary w-full"
            >
              Subscribe
            </button>
          ) : (
            <Link
            to={`/gold/${id}`}
            className="btn btn-outline btn-warning w-full"
          >
            Subscribe
          </Link>
          )}
         
        </div>
      </div>

      {/* Platinum Plan */}
      <div className="card bg-blue-100 w-80 shadow-lg border border-blue-500">
        <div className="card-body text-center">
          <h2 className="text-2xl font-bold text-blue-700">Platinum Plan</h2>
          <p className="text-lg text-blue-600 my-3">
            Luxury experience for students
          </p>
          <p className="text-3xl font-bold text-blue-800 my-3">$200/month</p>
          <ul className="text-blue-600 mb-4">
            <li>✔️ Private Room</li>
            <li>✔️ Free Wi-Fi</li>
            <li>✔️ Premium Meal Plan</li>
            <li>✔️ Laundry Service</li>
            <li>✔️ Gym Access</li>
          </ul>

          {isAdmin ? (
            <button
              onClick={handleadmin}
              className="btn btn-outline btn-primary w-full"
            >
              Subscribe
            </button>
          ) : (
            <Link
            to={`/platinum/${id}`}
            className="btn btn-outline btn-info w-full"
          >
            Subscribe
          </Link>
          )}

         
        </div>
      </div>
    </div>
  );
}

export default SubscriptionPlans;
