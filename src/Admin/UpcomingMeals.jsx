import { useQuery } from '@tanstack/react-query';
import React from 'react'
import Swal from 'sweetalert2';
import useAxiosSecure from '../Hook/useAxiosSecure';

export default function UpcomingMeals(){
  const axiosSequre = useAxiosSecure()
  const {data: upcomingMeals=[]} = useQuery({
    queryKey:['upcomingMeals'],
    queryFn:async () =>{
      const {result} = await axiosSequre.post('/add-upcoming-meal')
      return result
    }
  })
  const handleComingMeals = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be able to add Upcoming Meals!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }
  return (
    <div>
      <div>
        {/* add ucoming meals */}
        <button
        onClick={handleComingMeals}
        className='btn btn-success text-white '>Add upcoming meal</button>
      </div>
    </div>
  )
}
