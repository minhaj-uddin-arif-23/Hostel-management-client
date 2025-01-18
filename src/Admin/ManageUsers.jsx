import React from 'react'
import useAxiosSecure from '../Hook/useAxiosSecure'
import { useQuery } from '@tanstack/react-query'

function ManageUsers() {
  // TODO : serach functionality add username &  email

  const axiosSequre = useAxiosSecure()
  const {data: users=[]} = useQuery({
    queryKey:['users'],  
    queryFn:async () =>{
      const res =await axiosSequre.get('/allUsers')
      return res.data
    }
  })
  return (
    <div>
          <div>ManageUsers : {users.length}</div>
        <div>
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className='text-lg font-semibold'>
        <th>Number</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th> 
        <th>Subscription status</th> 
      </tr>
    </thead>
    <tbody>
      {
        users?.map((user,index)=><>
      <tr key={user._id}>
        <th>{index+1}</th>
        <td>{user?.name}</td>
        <td>{user?.email}</td>
        <td>{user?.badge}</td>
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

export default ManageUsers