import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAxiosPublic from '../Hook/useAxiosPublic'
import UpcomingMealCard from './UpcomingMealCard'

export default function UpComingmeals() {
  const axiosPublic = useAxiosPublic()
  const {data: upcomingMeal = []} = useQuery({
    queryKey:['upcomingMeal'],
    queryFn:async () => {
      const {data} = await axiosPublic.get('/show-upcoming-meals-card')
      return data
    }
  })
  return (
    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4 gap-7 mt-10'>
      {
        upcomingMeal?.map((meal)=><UpcomingMealCard  key={meal._id} items={meal}/>)
      }
    </div>
  )
}
