import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAxiosSecure from '../Hook/useAxiosSecure'
import useAuth from '../Hook/useAuth'

export default function AdminProfile() {
  const {user} = useAuth()
  const axiosSequre = useAxiosSecure()
  const {data: adminprofile =[]} =useQuery({
    queryKey:['adminprofile',user?.email],
    queryFn:async () => {
      const {data} = await axiosSequre.get(`/admin-profile/${user?.email}`)
      return data
    }
  })     
  // fetch total meal count 
  const {data:mealCount = 0} = useQuery({
    queryKey:['mealCount',user?.email],
    queryFn:async () =>{
      const {data} = await axiosSequre.get(`/admin-total-meal-count/${user?.email}`)
      return data.totalMeal
    }
  })
  console.log('Total meal count ---> ',mealCount)


  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
    <h2 className="text-xl font-semibold text-gray-700 mb-4">
      {user?.displayName} you can add total {mealCount} meals
    </h2>
    
    <div className="overflow-x-auto">
      <table className="table-auto w-full border-collapse border border-gray-200">
        {/* Table Header */}
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-4 text-sm font-medium text-gray-600">Name</th>
            <th className="p-4 text-sm font-medium text-gray-600">Image</th>
            <th className="p-4 text-sm font-medium text-gray-600">Email</th>
          </tr>
        </thead>
        
        {/* Table Body */}
        <tbody>
          <tr className="bg-gray-50 hover:bg-gray-100 transition duration-200">
            <td className="p-4 text-gray-700 text-sm font-medium">{user?.displayName}</td>
            <td className="p-4">
              <img
                src={adminprofile?.image}
                alt="Profile"
                className="rounded-xl w-10 h-10 object-cover"
              />
            </td>
            <td className="p-4 text-gray-700 text-sm">{user?.email}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  
  )
}
