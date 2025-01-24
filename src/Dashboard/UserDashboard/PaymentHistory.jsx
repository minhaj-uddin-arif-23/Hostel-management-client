import React from 'react'
import useAxiosSecure from '../../Hook/useAxiosSecure'
import { useQuery } from '@tanstack/react-query'
import useAuth from '../../Hook/useAuth'
import Loading from '../../components/Loading'
import { format } from 'date-fns';
import { Helmet } from 'react-helmet'
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
      <Helmet>
        <title>Hostel Management | Payment History  </title>
      </Helmet>
      <div>
      <h1 className='text-3xl font-semibold my-5'> Payment History for {user?.displayName} </h1>
      </div>
      <div>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className='font-semibold text-[16px]'>
        
        <th>Name</th>
        <th>Email</th>
        <th>Package</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody className='font-semibold text-[14px]'>
     
        <tr className="bg-base-200" key={paymentHistory._id}>
        <th>{user?.displayName}</th>
        <td>{user?.email}</td>
        <td>{paymentHistory.plan}</td>
       <td>{format(new Date(paymentHistory.date), 'MMMM dd, yyyy')}</td>
      </tr>
      
    
  
    </tbody>
  </table>
</div>
      </div>
    </div>
  )
}
