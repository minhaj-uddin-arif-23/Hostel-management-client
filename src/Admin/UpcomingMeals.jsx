import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../Hook/useAxiosSecure";
import AddMealForm from "./AddMealForm";
import Loading from "../components/Loading";
import ShowUpcomingMeals from "./ShowUpcomingMeals";

export default function UpcomingMeals() {
  const [showallMeal] = ShowUpcomingMeals();
  const axiosSequre = useAxiosSecure();
  const { data: upcomingMeals = [], isLoading } = useQuery({
    queryKey: ["upcomingMeals"],
    queryFn: async () => {
      const { result } = await axiosSequre.post("/add-upcoming-meal");
      return result;
    },
  });
  // Mutations
  // const mutation = useMutation({
  //   mutationFn: postTodo,
  //   onSuccess: () => {
  //     // Invalidate and refetch
  //     queryClient.invalidateQueries({ queryKey: ['todos'] })
  //   },
  // })
  // if(isLoading) <Loading />

  // State for controlling modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div>
      <div>
        <button
          onClick={handleOpenModal}
          className="btn btn-success text-white"
        >
          Add Upcoming Meal
        </button>

        {/* Modal */}
        {isModalOpen && (
          <div className="modal modal-open">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Add Upcoming Meal</h3>
              <AddMealForm closeModal={handleCloseModal} />
              <div className="modal-action">
                <button
                  className="btn btn-error text-white"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Display Upcoming Meals */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Upcoming Meals</h2>
        <ul>
          {upcomingMeals?.map((meal, index) => (
            <li key={index} className="border p-4 mb-2 rounded">
              {/* <h3 className="text-lg font-bold">{meal.title}</h3>
              <p>Category: {meal.category}</p>
              <p>Price: ${meal.price}</p> */}
            </li>
          ))}
        </ul>
      </div>
      {/* show table wise data */}
      <div>total upcoming meal : {showallMeal.length}</div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="">
                <th>Title</th>
                <th>category</th>
                <th>Image</th>
                <th>price</th>
                <th>Ingredients</th>
                <th>Description</th> 
                <th>Actions</th> 
              </tr>
            </thead>
            <tbody>
              {showallMeal?.map((meal) => (
                <>
                  <tr>
                    <th>{meal.title}</th>
                    <td>{meal.category}</td>
                    <td><img src={meal.image} className="rounded-xl" alt="" /></td>
                    <td>{meal.price}</td>
                    <td>{meal.Ingredients}</td>
                   
                    <td>{meal.Description}</td>
                    <td><button className="btn btn-sm btn-success text-white">Publish meal</button></td>
                    
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
