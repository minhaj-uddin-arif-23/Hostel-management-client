import React from "react";

import useAxiosSecure from "../../Hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hook/useAuth";
import Loading from "../../components/Loading";
// import useAxiosPublic from "../../Hook/useAxiosPublic";
import Swal from "sweetalert2";
export default function RequestedMeals() {
  const { user } = useAuth();
  const axiosSequre = useAxiosSecure();
  // const axiosPublic = useAxiosPublic()
  const { data: orderMeals =[] ,isLoading, refetch} = useQuery({
    queryKey: ["orderMeals",user?.email],
    enabled:!!user,
    queryFn: async () => {
      const {data} = await axiosSequre.get(`/requested-meal/${user?.email}`);
      return data
    },
  });
  // console.log('my requested data',orderMeals);
  if(isLoading) return <Loading />

     const handleDelete = (id) => {
            Swal.fire({
              title: "Are you sure?",
              text: "You won't be able to cancel this request!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, delete it!",
            }).then((result) => {
              if (result.isConfirmed) {
                axiosSequre.delete(`/request-delete/${id}`)
                  .then((res) => {
                  if (res.data.deletedCount > 0) {
                    refetch()
                    Swal.fire({
                      title: "Deleted!",
                      text: " requeste meal deleted.",
                      icon: "success",
                    });
                  }
                });
              }
            });
          };

  return (
    <div>
      <div>
        {/* <h1>RequestedMeals{orderMeals.length}</h1> */}
      </div>
      <div className="p-4 sm:p-6 bg-white shadow-md rounded-lg">
  <div className="overflow-x-auto">
    <table className="table-auto w-full text-left border border-gray-200">
      {/* Table Head */}
      <thead className="bg-gray-100 text-sm font-medium text-gray-700">
        <tr>
          <th className="px-4 py-2 border-b">Title</th>
          <th className="px-4 py-2 border-b">Like</th>
          <th className="px-4 py-2 border-b">Review Count</th>
          <th className="px-4 py-2 border-b">Status</th>
          <th className="px-4 py-2 border-b"></th>
        </tr>
      </thead>

      {/* Table Body */}
      <tbody className="divide-y divide-gray-200">
        {orderMeals?.map((meal) => (
          <tr key={meal._id} className="hover:bg-gray-50">
            <td className="px-4 py-3 text-sm text-gray-800">{meal.title}</td>
            <td className="px-4 py-3 text-sm text-gray-800">{meal.like}</td>
            <td className="px-4 py-3 text-sm text-gray-800">{meal.review_count}</td>
            <td className="mt-3 text-sm text-gray-800 btn btn-sm bg-blue-100 rounded-full">{meal.status}</td>
            <td className="px-4 py-3">
              <button 
              onClick={() => handleDelete(meal._id)}
              className="btn btn-sm bg-red-500/90 text-white rounded-full px-4 py-1 hover:bg-red-600">
                Cancel
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

    </div>
  );
}
