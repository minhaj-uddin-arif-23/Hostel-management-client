import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../Hook/useAxiosSecure';
import { Link } from 'react-router-dom';

export default function AllMeals() {
  const axiosSecure = useAxiosSecure();
  const [currentPage, setCurrentPage] = useState(0); // For the current page
  const itemsPerPage = 10; // Number of items per page

  const { data: meals = [], isLoading } = useQuery({
    queryKey: ['meals', currentPage],
    queryFn: async () => {
      const res = await axiosSecure.get(`/all-meal-show?page=${currentPage}&size=${itemsPerPage}`);
      return res.data;
    },
  });

  if (isLoading) return <div>Loading...</div>;

  // Pagination buttons logic
  const totalPages = Math.ceil(100 / itemsPerPage); // Replace 100 with the total number of meals from your API
  const pages = [...Array(totalPages).keys()];

  return (
    <div>
      <div className="mb-12 flex mr-12 justify-between">
        <div className="font-semibold">Total {meals.length} Meals</div>
        <div>
          <button className="btn btn-outline">Sort by like</button>
          <button className="btn btn-outline ml-4">Sort by rating</button>
        </div>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* Head */}
            <thead>
              <tr className="font-semibold text-[15px]">
                <th>Name</th>
                <th>Title</th>
                <th>Like</th>
                <th>Reviews</th>
                <th>Rating</th>
                <th>Update</th>
                <th>Delete</th>
                <th>See Meal</th>
              </tr>
            </thead>
            <tbody>
              {/* Rows */}
              {meals.map((item) => (
                <tr className="font-semibold" key={item._id}>
                  <td>{item.name}</td>
                  <td>{item.title}</td>
                  <td>{item.like}</td>
                  <td>{item.review_count}</td>
                  <td>{item.rating}</td>
                  <td>
                    <Link to={`/dashboard/updateItem/${item._id}`} className="btn btn-sm btn-warning">
                      Update
                    </Link>
                  </td>
                  <td>
                    <button className="btn btn-sm btn-error text-white">Delete</button>
                  </td>
                  <td>
                    <Link to={`/meal/${item._id}`} className="btn btn-sm btn-success text-white">
                      View Meal
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="mt-4 flex justify-center">
          {pages.map((number) => (
            <button
              key={number}
              className={`btn btn-sm ${currentPage === number ? 'btn-primary' : 'btn-outline'} mx-1`}
              onClick={() => setCurrentPage(number)}
            >
              {number + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
