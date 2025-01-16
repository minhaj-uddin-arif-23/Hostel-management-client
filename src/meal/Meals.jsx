import React, { useState } from "react";
import useMeal from "../Hook/useMeal";
import MealCard from "./MealCard";
import useAxiosPublic from "../Hook/useAxiosPublic";
import Loading from "../components/Loading";
import { useQuery } from "@tanstack/react-query";

export default function Meals() {

  const axiosPublic = useAxiosPublic()
  const [filter,setFilter] = useState('')
  const {data:meals=[],isLoading,refetch} = useQuery({
    queryKey:['meals',filter],
    queryFn: async () => {
        const {data}= await axiosPublic(`/all-meal?filter=${filter}`)
        return data
    }
  })
  if(isLoading) <Loading />
  console.log(filter)
  return (
    <div>
      <div className="flex gap-5 w-1/2">
        <select
          // defaultValue="default"
          className="select select-primary w-full "
          onChange={(e)=>setFilter(e.target.value)}
        >
          <option disabled value="default">
            Select a category
          </option>
          <option value="Breakfast">Breakfast</option>
          <option value="Launch">Launch</option>
          <option value="Dinner">Dinner</option>
          <option value="All Meals">All Meals</option>
        </select>
        <input
          type="text"
          placeholder="Type your favourite Meal"
          className="input input-bordered input-info w-full max-w-xs"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4 gap-7 mt-10">
        {meals?.map((item) => (
          <MealCard key={item._id} items={item} />
        ))}
      </div>
    </div>
  );
}
