import React, { useState } from "react";
import useAuth from "../Hook/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hook/useAxiosSecure";
import Loading from "../components/Loading";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

export default function ServeMeals() {
  // * status change to deliverd
  const [search, setSearch] = useState("");
  const { user } = useAuth();
  const axiosSequre = useAxiosSecure();
  const [currentPage, setCurrentPage] = useState(0);
  const itemPerPage = 10;
  const {
    data: mealrequest = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: [" mealrequest", search, currentPage],
    queryFn: async () => {
      const { data } = await axiosSequre.get(
        `/show-meal-request?search=${search}&page=${currentPage}&size=${itemPerPage}`
      );
      return data;
    },
  });

  // if (isLoading)  <Loading />;

  // update user status for clicking the server button
  const handleStatus = (id) => {
    // console.log("status email ", id);
    axiosSequre
      .patch(`/update/status/${id}`, { status: "delivered" })
      .then((res) => {
        console.log("status data ", res.data);
        if (res.data.modifiedCount > 0){
          refetch();
          Swal.fire({
            title: `Status Updated Successfully Delivered`,
            icon: "success",
            draggable: true,
          });
        } else {
          Swal.fire({
            title: "Somthing was issue",
            icon: "error",
            draggable: true,
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          title: "Somthing was issue",
          icon: "error",
          draggable: true,
        });
      });
  };

  const totalPage = Math.ceil(100 / itemPerPage);
  const pages = [...Array(totalPage).keys()];

  return (
    <div className="max-w-6xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      {/* Header and Search */}
      <div>
        <Helmet>
          <title>Hostel Management | Serve meals</title>
        </Helmet>
      </div>
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">
          Total Meal Requests: {mealrequest.length}
        </h1>
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Type your favourite Meal"
          className="input input-bordered input-info w-full max-w-xs"
        />
      </div>
      {isLoading && <Loading />}
      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* Table Header */}
          <thead className="bg-gray-100">
            <tr className="text-sm font-semibold text-gray-600">
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Serve Meal</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {mealrequest?.map((meal) => (
              <tr
                key={meal._id}
                className="hover:bg-gray-50 transition duration-200"
              >
                <td className="px-4 py-3 text-sm text-gray-700">
                  {meal.title}
                </td>
                <td className="px-4 py-3 text-sm text-gray-700">
                  {meal.User?.email}
                </td>
                <td className="px-4 py-3 text-sm text-gray-700">
                  {meal.User?.name}
                </td>
                <td className=" btn btn-sm rounded-full bg-blue-100 mt-2  ">
                  {meal.status}
                </td>
                <td>
                  <button
                    onClick={() => handleStatus(meal._id)}
                    className="btn bg-green-300 rounded-full text-black "
                  >
                    Serve
                  </button>
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
