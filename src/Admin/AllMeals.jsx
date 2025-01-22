import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hook/useAxiosSecure";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

export default function AllMeals() {
  const axiosSecure = useAxiosSecure();
  const [sortBy, setSortBy] = useState("like");
  const [currentPage, setCurrentPage] = useState(0); // For the current page
  const itemsPerPage = 10; // Number of items per page

  const { data: meals = [], isLoading } = useQuery({
    queryKey: ["meals", currentPage,sortBy],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/all-meal-show?page=${currentPage}&size=${itemsPerPage}&sort=${sortBy}`
      );
      return res.data;
    },
  });

  if (isLoading) return <Loading />;

  // Pagination buttons logic
  const totalPages = Math.ceil(100 / itemsPerPage); // Replace 100 with the total number of meals from your API
  const pages = [...Array(totalPages).keys()];

  return (
    <div className="max-w-6xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      {/* Header with Total Meals and Sort Buttons */}
      <div className="mb-8 flex justify-between items-center">
        <div className="font-semibold text-lg text-gray-700">
          Total {meals.length} Meals
        </div>
        <div>
          <button
            className={`btn btn-outline btn-sm text-gray-700 ${
              sortBy !== "like" ? "" : "btn-primary"
            }`}
            onClick={() => setSortBy("like")}
          >
            Sort by Like
          </button>
          <button className="btn btn-outline btn-sm text-gray-700 hover:bg-gray-100 ml-4">
            Sort by Rating
          </button>
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-200">
          {/* Table Header */}
          <thead className="bg-gray-100">
            <tr className="text-sm font-semibold text-gray-600">
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Like</th>
              <th className="px-4 py-3">Reviews</th>
              <th className="px-4 py-3">Rating</th>
              <th className="px-4 py-3">Update</th>
              <th className="px-4 py-3">Delete</th>
              <th className="px-4 py-3">See Meal</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {meals.map((item) => (
              <tr
                className="hover:bg-gray-50 transition duration-200"
                key={item._id}
              >
                <td className="px-4 py-3 text-sm text-gray-700">{item.name}</td>
                <td className="px-4 py-3 text-sm text-gray-700">
                  {item.title}
                </td>
                <td className="px-4 py-3 text-sm text-gray-700">{item.like}</td>
                <td className="px-4 py-3 text-sm text-gray-700">
                  {item.review_count}
                </td>
                <td className="px-4 py-3 text-sm text-gray-700">
                  {item.rating}
                </td>
                <td>
                  <Link
                    to={`/dashboard/updateItem/${item._id}`}
                    className="btn btn-sm btn-warning text-white"
                  >
                    Update
                  </Link>
                </td>
                <td>
                  <button className="btn btn-sm btn-error text-white">
                    Delete
                  </button>
                </td>
                <td>
                  <Link
                    to={`/meal/${item._id}`}
                    className="btn btn-sm btn-success text-white"
                  >
                    View Meal
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Section */}
      <div className="mt-6 flex justify-center">
        {pages.map((number) => (
          <button
            key={number}
            className={`btn btn-sm ${
              currentPage === number ? "btn-primary" : "btn-outline"
            } mx-1`}
            onClick={() => setCurrentPage(number)}
          >
            {number + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
