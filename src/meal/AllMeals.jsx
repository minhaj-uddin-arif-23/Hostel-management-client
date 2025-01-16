import React from 'react'
import useMeal from '../Hook/useMeal'
import MealCard from './MealCard'

export default function AllMeals() {
  const [meal] = useMeal()
  return (
    <div>
      <div>
        // * SEARCH FUNCTIONALITY & FILTER FUNCTIONALITY
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-7'>
        {
          meal?.map(item => < MealCard key={item._id} items={item} />)
        }
      </div>
    </div>
  )
}
