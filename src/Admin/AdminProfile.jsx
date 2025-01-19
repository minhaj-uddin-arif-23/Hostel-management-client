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
    <div>
      <div>
                  {user?.displayName} you can added total {mealCount}
      </div>
      <div>
      <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Image</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {

              }
                <>
                  <tr className="bg-base-200">
                    <th>{user?.displayName}</th>
                    <td><img src={adminprofile?.image} className='rounded-xl w-10' alt="" /></td>
                    <td>{user?.email}</td>
                    
                    
                  </tr>
                </>
             
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
