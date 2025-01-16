import React from "react";
import useAxiosSecure from "../Hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loading from "../components/Loading";

function AllReviews() {
  const axiosSequre = useAxiosSecure();
  const { data: allreviews = [], isLoading } = useQuery({
    queryKey: ["allreviews"],
    queryFn: async () => {
      const { data } = await axiosSequre("/allreviews");
      return data;
    },
  });
  // console.log(allreviews);
  if (isLoading) <Loading />;
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
                    <td>Quality Control Specialist</td>
                    {/* <td>Blue</td> */}
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
