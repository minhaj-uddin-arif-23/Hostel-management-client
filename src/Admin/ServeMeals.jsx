import React, { useState } from "react";
import useAuth from "../Hook/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hook/useAxiosSecure";
import Loading from "../components/Loading";

export default function ServeMeals() {
  // * status change to deliverd
  const [search,setSearch] = useState('')
  // const { user } = useAuth();
  const axiosSequre = useAxiosSecure();
  const { data: mealrequest = [], isLoading } = useQuery({
    queryKey: [" mealrequest",search],
    queryFn: async () => {
      const { data } = await axiosSequre.get(
        `/show-meal-request?search=${search}`
      );
      return data;
    },
  });
  // console.log(mealrequest);
  // console.log(search);
  if (isLoading) <Loading />;
  return (
    <div>
      <div>
        <h1>Total meal request {mealrequest.length}</h1>
      {/* search  */}
      <input
        onChange={e => setSearch(e.target.value)}
          type="text"
          placeholder="Type your favourite Meal"
          className="input input-bordered input-info w-full max-w-xs"
        />
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr> 
                <th>Title</th>
                <th>Email</th>
                <th>Name</th>
                <th>Status</th>
                <th>Serve meal</th>
              </tr>
            </thead>
            <tbody>
              {mealrequest?.map((meal) => (
                <>
                  <tr>
                    <th>{meal.title}</th>
                    <td>{meal.User?.email}</td>
                    <td>{meal.User?.name}</td>
                    <td>{meal.status}</td>
                    <td><button className="btn btn-accent">Serve</button></td>
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
