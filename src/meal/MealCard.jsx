import React from 'react'
import { Link } from 'react-router-dom'

export default function MealCard({items}) {
  const {title,category,image,price,email,
    Ingredients,
    Description,name,like,StartDate,rating,review_count,_id} = items || {}
  return (
    <div>
      <div>
      <div className="card card-compact bg-base-100  w-80 shadow-xl">
  <figure>
    <img
      src={image} className='w-full object-cover'
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
   <div className='flex justify-between'>
   <p className='font-semibold text-lg'>${price}</p>
   <p p className='font-semibold text-lg ml-28'>rating : {rating}</p>
   </div>
    <div className="card-actions mt-3">
      <Link to={`/meal/${_id}`} className="btn btn-sm btn-warning">Details</Link>
    </div>
  </div>
</div>
      </div>
    </div>
  )
}
// const handleLikeUpdate =async () => {
  //  try{
  //    const res = axiosSequre.patch(`/meal/like/${id}`,{
  //     likeIncrease:count,
  //   })
  //   if(res.modifiedCount > 0){
  //     toast.success("Wow you like it")
  //     setCount(count + 1)
  //   }
  //  }catch(error){
  //           toast.error("Some mistake you")
  //           console.log(error)
  //  }