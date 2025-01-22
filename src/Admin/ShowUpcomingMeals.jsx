import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import useAxiosSecure from '../Hook/useAxiosSecure'

export default function ShowUpcomingMeals() {
  const axiosSequre = useAxiosSecure()
    const [currentPage,setCurrentPage] = useState(0);
        const itemPerPage = 5
  const {data: showallMeal=[]} = useQuery({
    queryKey:['showallMeal',currentPage],
    queryFn:async () =>{
      const {data} =await axiosSequre.get(`/upcoming-meal-show?page=${currentPage}&size=${itemPerPage}`)
      // console.log('upcoming meals --> ',data)
      return data
    }
  })

  return [showallMeal,currentPage,setCurrentPage,itemPerPage]
}
