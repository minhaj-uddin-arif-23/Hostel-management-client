// import React from 'react'
// import useAxiosSecure from '../../Hook/useAxiosSecure'
// import { useQuery } from '@tanstack/react-query'

// function RequestedMealshow() {
//   const axiosSequre = useAxiosSecure()
//   const {data: orderMeals=[]} = useQuery({
//     queryKey:['orderMeals'],
//     queryFn:async () => {
//       const res = await axiosSequre.get(`/requested-meal/${email}`)
//       return res.data
//     }
//   })
//   console.log('my requested data',orderMeals);
//   return (
//     <div>RequestedMealshow</div>
//   )
// }

// export default RequestedMealshow