import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAxiosSecure from '../Hook/useAxiosSecure'

export default function ShowUpcomingMeals() {
  const axiosSequre = useAxiosSecure()
  const {data: showallMeal=[]} = useQuery({
    queryKey:['showallMeal'],
    queryFn:async () =>{
      const {data} =await axiosSequre.get('/upcoming-meal-show')
      return data
    }
  })

  return [showallMeal]
}
