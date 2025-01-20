import React, { useState } from "react";
import useAxiosSecure from "../Hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loading from "../components/Loading";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

function AllReviews() {
  const axiosSequre = useAxiosSecure();
    const [currentPage,setCurrentPage] = useState(0);
      const itemPerPage = 10
  const {
    data: allreviews = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allreviews",currentPage],
    queryFn: async () => {
      const { data } = await axiosSequre.get(`/allreviews?page=${currentPage}&size=${itemPerPage}`);
      return data;
    },
  });
  // console.log(allreviews);
  if (isLoading) <Loading />;

  const totalPage = Math.ceil(100/itemPerPage)
  const pages = [...Array(totalPage).keys()]

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
        axiosSequre.delete(`/my-review-delete/${id}`)
          .then((res) => {
          if (res.data.deletedCount > 0) {
            refetch()
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

  return (
    <div>
  <div>All Reviews: {allreviews.length}</div>
  <div>
    <div className="overflow-x-auto">
      <table className="table">
        {/* Table Header */}
        <thead>
          <tr>
            <th>Title</th>
            <th>Like</th>
            <th>Review</th>
            <th>Actions</th>
            <th>View Meal</th>
          </tr>
        </thead>
        {/* Table Body */}
        <tbody>
          {allreviews?.map((review) => (
            <tr key={review._id} className="bg-base-200">
              <td>{review.text}</td>
              <td>{review.like}</td>
              <td>{review.rating}</td>
              <td>
                <button
                  onClick={() => handleDelete(review._id)}
                  className="btn btn-sm btn-error text-white"
                >
                  Delete
                </button>
              </td>
              <td>
                <Link
                  to={`/meal/${review.meal_id}`}
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
    <div className="mt-10 flex items-center justify-center">
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
</div>

  
  );
}

export default AllReviews;
