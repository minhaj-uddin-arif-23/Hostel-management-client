import React, { useState } from "react";
import useMeal from "../Hook/useMeal";
import MealCard from "./MealCard";
import useAxiosPublic from "../Hook/useAxiosPublic";
import Loading from "../components/Loading";
import { useQuery } from "@tanstack/react-query";

export default function Meals() {
  const axiosPublic = useAxiosPublic();
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(500);
  const {
    data: meals = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["meals", filter, search],
    queryFn: async () => {
      const { data } = await axiosPublic(
        `/all-meals?filter=${filter}&search=${search}&minPrice=${minPrice}&maxPrice=${maxPrice}`
      );
      return data;
    },
  });
  if (isLoading) <Loading />;
  // console.log(filter)
  return (
    <div>
      <div className="flex justify-between mr-20 ">
        {/* search */}
        <div>
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Type your favourite Meal"
            className="input input-bordered input-info w-full max-w-xs"
          />
        </div>
        {/* category */}
        <div>
          <div className="flex gap-6">
            <span className="mt-2 font-semibold">Min</span>{" "}
            <input
              type="number"
              placeholder=" Min Price"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="input input-bordered input-info w-full max-w-24"
            />
            <span className="mt-2 font-semibold">Max</span><input
              type="number"
              placeholder="Max Price"
              onChange={(e) => setMaxPrice(e.target.value)}
              value={maxPrice}
              className="input input-bordered input-info w-full max-w-24"
            />
            <select
              // defaultValue="default"
              className="select select-primary w-full font-semibold  "
              onChange={(e) => setFilter(e.target.value)}
            >
              <option disabled value="default">
                Select a category
              </option>
              <option value="Breakfast">Breakfast</option>
              <option value="Launch">Launch</option>
              <option value="Dinner">Dinner</option>
              <option value="All Meals">All Meals</option>
            </select>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4 gap-7 mt-10">
        {meals?.map((item) => (
          <MealCard key={item._id} items={item} />
        ))}
      </div>
    </div>
  );
}
