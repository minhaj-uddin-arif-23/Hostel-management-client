import React from "react";
import useAxiosSecure from "../Hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loading from "../components/Loading";
import Swal from "sweetalert2";

function AllReviews() {
  const axiosSequre = useAxiosSecure();
  const {
    data: allreviews = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allreviews"],
    queryFn: async () => {
      const { data } = await axiosSequre.get("/allreviews");
      return data;
    },
  });
  // console.log(allreviews);
  if (isLoading) <Loading />;

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
        axiosSequre.delete(`/review/${id}`)
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
      <div>AllReviews :{allreviews.length}</div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Title</th>
                <th>Like</th>
                <th>review</th>
                <th>actions</th>
                <th>view meal</th>
              </tr>
            </thead>
            <tbody>
              {allreviews?.map((review) => (
                <>
                  <tr className="bg-base-200">
                    <th>{review.text}</th>
                    <th>{review.like}</th>
                    <td>{review.rating}</td>
                    <td>
                      {" "}
                      <button
                        onClick={() => handleDelete(review._id)}
                        className="btn btn-sm btn-error text-white"
                      >
                        Delete
                      </button>{" "}
                    </td>
                    <td>
                      <button
                        className="btn btn-sm btn-success text-white
                   "
                      >
                        View Meal
                      </button>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AllReviews;
