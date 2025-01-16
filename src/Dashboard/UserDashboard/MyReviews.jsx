import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import useAuth from "../../Hook/useAuth";
import Loading from "../../components/Loading";

export default function MyReviews() {
  const { user } = useAuth();
  const axiosSequre = useAxiosSecure();
  const { data: myreview = [], isLoading } = useQuery({
    queryKey: ["myreview", user?.email],
    enabled: !!user,
    queryFn: async () => {
      const { data } = await axiosSequre.get(`/my-review/${user?.email}`);
      return data;
    },
  });
  if (isLoading) <Loading />;
  // console.log(myreview);
  return (
    <div>
      <h1> MyReviews : {myreview.length}</h1>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Title</th>
                <th>Like</th>
                <th>edit</th>
                <th>Delete</th>
                <th>view meal buttons</th>
              </tr>
            </thead>
            <tbody>
              {myreview?.map((item) => (
                <>
                  <tr className="bg-base-200">
                    <th>{item.text}</th>
                    <td>{}</td>
                    <td><button className="btn btn-sm btn-outline">Edit</button></td>
                    <td><button className="btn btn-sm btn-error">Delete</button></td>
                    <td><button className="btn btn-sm btn-outline">view meal</button></td>
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
