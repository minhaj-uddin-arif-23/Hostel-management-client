import React from 'react'
import { Link } from 'react-router-dom'

export default function MealCard({items}) {
  const {title,category,image,price,email,
    Ingredients,
    Description,name,like,StartDate,rating,review_count,_id} = items || {}
  return (
    <div className='ml-12 md:ml-0'>
      <div>
      <div className="card card-compact bg-base-100 w-72 shadow-xl">
  <figure>
    <img
      src={image}
      className="w-full h-48 object-cover rounded-t-lg transition-transform duration-300 ease-in-out hover:scale-110"
      alt="Meal Plan"
    />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-xl font-bold text-gray-800">{title}</h2>
    {/* <p className="text-sm text-gray-600 mb-2 font-semibold">
      {Description}
    </p> */}
    <div className="flex justify-between items-center">
      <p className="font-semibold text-lg text-blue-600">${price}/month</p>
      <p className="font-semibold text-lg text-gray-700">Rating: {rating}⭐</p>
    </div>
    <div className="card-actions mt-4">
      <Link
        to={`/meal/${_id}`}
        className="btn btn-sm btn-outline  hover:bg-yellow-600"
      >
        View Details
      </Link>
    </div>
  </div>
</div>

      </div>
    </div>
  )
}
