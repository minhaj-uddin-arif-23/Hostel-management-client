import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAxiosPublic, { axiosPublic } from './useAxiosPublic';

export default function useMeal() {
  const axiosPublic = useAxiosPublic()
  const {data:meals=[],isLoading:loading,refetch} = useQuery({
    queryKey:['meals'],
    queryFn: async () => {
        const res= await axiosPublic('/all-meal')
        return res.data
    }
  })
  return[meals,loading,refetch]
}
