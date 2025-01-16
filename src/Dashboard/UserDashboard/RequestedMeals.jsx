import React from "react";

import useAxiosSecure from "../../Hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hook/useAuth";
import Loading from "../../components/Loading";
import useAxiosPublic from "../../Hook/useAxiosPublic";
export default function RequestedMeals() {
  const { user } = useAuth();
  // const axiosSequre = useAxiosSecure();
  const axiosPublic = useAxiosPublic()
  const { data: orderMeals =[] ,isLoading} = useQuery({
    queryKey: ["orderMeals",user?.email],
    queryFn: async () => {
      const {data} = await axiosPublic.get(`/requested-meal/${user?.email}`);
      return data
    },
  });
  console.log('my requested data',orderMeals);
  if(isLoading) return <Loading />
  return (
    <div>
      <div>
        {/* <h1>RequestedMeals{orderMeals.length}</h1> */}
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Title</th>
                <th>Like</th>
                <th>Review count</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {orderMeals?.map((meal) => (
                <>
                  <tr>
                    <th>{meal.title}</th>
                    <td>{meal.like}</td>
                    <td>{meal.review_count}</td>
                    <td>{meal.status}</td>
                    <td><button className="btn bg-red-600 text-white">cancel</button></td>
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
