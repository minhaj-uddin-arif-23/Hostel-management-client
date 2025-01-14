import React,{useState} from "react";
// import useMeal from "../Hook/useMeal";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../Hook/useAxiosPublic";
import { Link, useParams } from "react-router-dom";
import { SlLike } from "react-icons/sl";
function MealDetails() {
  const [count,setCount] = useState(1)
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();
  const { data: mealDetails = [] } = useQuery({
    queryKey: ["mealDetails"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/meal/${id}`);
      return res.data;
    },
  });

  const {
    title,
    category,
    image,
    price,
    email,
    Ingredients,
    Description,
    name,
    like,
    StartDate,
    rating,
    review_count,
    _id,
  } = mealDetails || {};
  // TODO LIKE BUTTON INCREASE

  return (
    <div>
      <div className="flex items-center justify-center mt-10">
        <div className="card card-compact bg-base-100  w-96 shadow-xl ">
          <figure>
            <img src={image} className="w-full object-cover" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{name}</p>
            <p>{Description}</p>
            <div className="flex justify-between">
              <p>{StartDate}</p>
              <p> Rating {rating}</p>
            </div>
            <button
            onClick={(data)=>setCount(data)}
             className="btn btn-sm">     
               <SlLike /> 
                {like} {count}
            </button>
            <p className="btn btn-sm">Meal Request</p>
            {/* <p>{}</p> */}
            <div className="flex justify-between">
              <p className="font-semibold text-lg">${price}</p>
              <p p className="font-semibold text-lg ml-28">
                rating : {rating}
              </p>
            </div>
            <div className="card-actions mt-3">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MealDetails;
