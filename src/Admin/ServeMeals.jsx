import React from "react";
import useAuth from "../Hook/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hook/useAxiosSecure";
import Loading from "../components/Loading";

export default function ServeMeals() {
  const { user } = useAuth();
  const axiosSequre = useAxiosSecure();
  const { data: mealrequest = [], isLoading } = useQuery({
    queryKey: [" mealrequest", user?.email],
    queryFn: async () => {
      const { data } = await axiosSequre.get(
        `/show-meal-request/${user?.email}`
      );
      return data;
    },
  });
  // console.log(mealrequest);
  if (isLoading) <Loading />;
  return (
    <div>
      <div>
        <h1>Total meal request {mealrequest.length}</h1>
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
                    <td>{user?.email}</td>
                    <td>{user?.displayName}</td>
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
