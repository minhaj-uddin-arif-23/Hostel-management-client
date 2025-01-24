import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import useAuth from "../../Hook/useAuth";
import Loading from "../../components/Loading";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

export default function MyReviews() {
  
  const { id } = useParams();
  const { user } = useAuth();
  const axiosSequre = useAxiosSecure();
  const {
    data: myreview = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["myreview", user?.email],
    enabled: !!user,
    queryFn: async () => {
      const { data } = await axiosSequre.get(`/my-review/${user?.email}`);
      return data;
    },
  });

  // handle edit

  // handle delete

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSequre.delete(`/review/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  if (isLoading) <Loading />;
  // console.log("my review is",myreview);
  return (
    // TODO Edit button functionality is  not ok
    <div>
      <Helmet>
        <title>Hostel Management | User Reviews</title>
      </Helmet>
    <h1> MyReview: {myreview.length}</h1>
    <div className="overflow-x-auto">
      <table className="table w-full table-auto">
        {/* head */}
        <thead>
          <tr>
            <th className="p-2 text-left">Title</th>
            <th className="p-2 text-left">Like</th>
            <th className="p-2 text-left">Edit</th>
            <th className="p-2 text-left">Delete</th>
            <th className="p-2 text-left">View Meal</th>
          </tr>
        </thead>
        <tbody>
          {myreview?.map((item) => (
            <tr className="bg-base-200 border-t">
              <td className="p-2">{item.text}</td>
              <td className="p-2"></td>
              <td className="p-2">
                <button className="btn btn-sm btn-outline">Edit</button>
              </td>
              <td className="p-2">
                <button
                  onClick={() => handleDelete(item._id)}
                  className="btn btn-sm btn-error"
                >
                  Delete
                </button>
              </td>
              <td className="p-2">
                <Link
                  to={`/meal/${item.meal_id}`}
                  className="btn btn-sm btn-outline"
                >
                  View Meal
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  
  );
}
