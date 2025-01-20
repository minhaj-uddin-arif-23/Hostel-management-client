import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../Hook/useAxiosSecure";
import AddMealForm from "./AddMealForm";
import Loading from "../components/Loading";
import ShowUpcomingMeals from "./ShowUpcomingMeals";

export default function UpcomingMeals() {

  const [showallMeal,currentPage,setCurrentPage,itemPerPage] = ShowUpcomingMeals();
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient(); // For invalidating and refetching queries

  // Fetch upcoming meals
  const { data: upcomingMeals = [], isLoading } = useQuery({
    queryKey: ["upcomingMeals"],
    queryFn: async () => {
      const response = await axiosSecure.get("/get-upcoming-meals");
      return response.data;
    },
  });
  const publishMealMutation = useMutation({
    mutationFn: async (meal) => {
      // POST request to your API to publish the meal
      const response = await axiosSecure.post("/publish-meal", meal);
      return response.data;
    },
    onSuccess: () => {
      // Show success message
      Swal.fire("Published!", "Meal has been published successfully!", "success");
  
      // Refetch the Meals query to update the Meals component
      queryClient.invalidateQueries({ queryKey: ["meals"] });
    },
    onError: (error) => {
      Swal.fire("Error!", error.message, "error");
    },
  });

  // Mutation for adding an upcoming meal
  const addUpcomingMealMutation = useMutation({
    mutationFn: async (newMeal) => {
      const response = await axiosSecure.post("/add-upcoming-meal", newMeal);
      return response.data;
    },
    onSuccess: () => {
      // Show success message
      Swal.fire("Success!", "Meal added successfully!", "success");

      // Invalidate and refetch the query to update the UI
      queryClient.invalidateQueries({ queryKey: ["upcomingMeals"] });
    },
    onError: (error) => {
      Swal.fire("Error!", error.message, "error");
    },
  });

  // State for controlling modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  // Add meal handler
  const handleAddMeal = (newMeal) => {
    addUpcomingMealMutation.mutate(newMeal);
    handleCloseModal(); // Close the modal after adding the meal
  };

  // If loading, show loading spinner
  if (isLoading) return <Loading />;
  const totalPage = Math.ceil(100 / itemPerPage);
  const pages = [...Array(totalPage).keys()];

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
              <AddMealForm
                closeModal={handleCloseModal}
                onAddMeal={handleAddMeal}
              />
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
              <h3 className="text-lg font-bold">{meal.title}</h3>
              <p>Category: {meal.category}</p>
              <p>Price: ${meal.price}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Show table-wise data */}
      <div>Total upcoming meals: {showallMeal.length}</div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* Table head */}
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Image</th>
                <th>Price</th>
                <th>Ingredients</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {showallMeal?.map((meal) => (
                <tr key={meal.id}>
                  <td>{meal.title}</td>
                  <td>{meal.category}</td>
                  <td>
                    <img src={meal.image} className="rounded-md w-20" alt="" />
                  </td>
                  <td>{meal.price}</td>
                  <td>{meal.Ingredients}</td>
                  <td>{meal.Description}</td>
                  <td>
                    <button 
                     onClick={() => publishMealMutation.mutate(meal)}
                    className="btn btn-sm btn-success text-white">
                      Publish Meal
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          {/* pagination */}
          <div className="mt-10 flex items-center justify-center">
          {pages.map((number) => (
            <button
              key={number}
              className={`btn btn-sm ${
                currentPage === number ? "btn-primary" : "btn-outline"
              } mx-1`}
              onClick={() => setCurrentPage(number)}
            >
              {number + 1}
            </button>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
}
