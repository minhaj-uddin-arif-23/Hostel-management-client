import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAxiosSecure from '../Hook/useAxiosSecure'
import { Link } from 'react-router-dom'

export default function AllMeals() {

    const axiosSequre = useAxiosSecure()
    const {data : meal=[]} = useQuery({
      queryKey:['meal'],
      queryFn: async () =>{
        const res = await axiosSequre.get('/all-meal-show')
        return res.data
      }
    })
    
  return (
    <div>
      <div className='mb-12 flex mr-12 justify-end'>
          <button className='btn btn-outline '>Sort by like</button>
          <button className='btn btn-outline ml-4'>Sort by rating </button>
      </div>
      <div>
      <div className="overflow-x-auto ">
  <table className="table">
    {/* head */}
    <thead>
      <tr className='font-semibold text-[15px]'>
        
        <th>Name</th>
        <th>Title</th>
        <th>like</th>
        <th>reviews</th>
        <th>Rating</th>
        <th>Update</th>
        <th>Delete</th>
        <th>See meal</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
    {
      meal?.map(item => <>
        <tr className='font-semibold'>
        <td>{item.name}</td>
        <td>{item.title}</td>
        <td>{item.like}</td>
        <td>{item.review_count}</td>
        <td>{item.rating}</td>
        <td><Link to={`/dashboard/updateItem/${item._id}`} className='btn btn-sm btn-warning'>update</Link></td>
        <td><button className='btn btn-sm btn-error text-white' >Delete</button></td>
   <td>     <button className='btn btn-sm btn-success text-white'>view meal</button></td>
      </tr>
      </>)
    }
    
    
    
    </tbody>
  </table>
</div>
      </div>
    </div>
  )
}
