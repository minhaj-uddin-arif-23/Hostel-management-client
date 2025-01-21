import React from 'react'
import useAxiosSecure from '../../Hook/useAxiosSecure'
import { useQuery } from '@tanstack/react-query'
import useAuth from '../../Hook/useAuth'
import Loading from '../../components/Loading'

export default function PaymentHistory() {
  const {user} = useAuth()
  const axiosSecure = useAxiosSecure()
  const {data: paymentHistory= [],isLoading} = useQuery({
    queryKey : ['paymentHistory',user?.email],
    queryFn:async () => {
      const {data} = await axiosSecure.get(`/user/paymentHistory/${user?.email}`)
      return  data
    }
  })
  if(isLoading) return <Loading />
  // console.log('payment history --> ',paymentHistory)
  return (
    <div>
      <div>
      Payment History for {user?.displayName}
      </div>
      <div>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        
        <th>Name</th>
        <th>Email</th>
        <th>Package</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
     
        <tr className="bg-base-200" key={paymentHistory._id}>
        <th>{user?.displayName}</th>
        <td>{user?.email}</td>
        <td>{paymentHistory.plan}</td>
        <td>{paymentHistory.date}</td>
      </tr>
      
    
  
    </tbody>
  </table>
</div>
      </div>
    </div>
  )
}
