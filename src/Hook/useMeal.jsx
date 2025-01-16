import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import useAxiosPublic, { axiosPublic } from './useAxiosPublic';

export default function useMeal() {
  const axiosPublic = useAxiosPublic()
  const [filter,setFilter] = useState('')
  const {data:meals=[],isLoading:loading,refetch} = useQuery({
    queryKey:['meals'],
    queryFn: async () => {
        const res= await axiosPublic('/all-meal')
        return res.data
    }
  })
  console.log(filter)
  return[meals,loading,refetch]
}
