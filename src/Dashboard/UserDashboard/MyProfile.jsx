import React from 'react'
import useAuth from '../../Hook/useAuth'
import useAxiosSecure from '../../Hook/useAxiosSecure'
import { useQuery } from '@tanstack/react-query'

function MyProfile() {
  const {user} = useAuth()
  const axiosSequre = useAxiosSecure()
  const {data:myProfile=[]} = useQuery({
    queryKey:[user?.email,'myProfile'],
    queryFn:async () => {
      const {data} = await axiosSequre.get(`/my-profile/${user?.email}`)
      return data 
    }
  })
  console.log(myProfile)
  return (
    <div>
       <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Image</th>
                <th>Email</th>
                <th>Badge</th>
              </tr>
            </thead>
            <tbody>
              {

              }
                <>
                  <tr className="bg-base-200">
                    <th>{user?.displayName}</th>
                    <td>{myProfile?.image}</td>
                    <td>{user?.email}</td>
                    <td>{myProfile?.badge}</td>
                    
                  </tr>
                </>
             
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default MyProfile