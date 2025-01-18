import { useQuery } from '@tanstack/react-query'
import React from 'react'

export default function AdminProfile() {
  const {data: adminprofile =[]} =useQuery({
    queryKey:['adminprofile'],
    queryFn:async () => {
      const result = await ax
    }
  })
  return (
    <div>AdminProfile</div>
  )
}
