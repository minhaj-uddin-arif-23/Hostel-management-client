import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAxiosPublic from '../Hook/useAxiosPublic'
import RoomCard from './RoomCard'
import Loading from './Loading'

export default function Room() {

  // TO-DO : --> USER SEE ROOM [AND BOOKING]
  // STEP-1 ADMIN ROUTE ADD ROOM --URL & IMG,NAME,LOCATION,PRICE 
  const axiosPublic = useAxiosPublic()
  const {data:rooms=[],isLoading} = useQuery({
    queryKey:['room'],
    queryFn:async () => { 
      const {data} = await axiosPublic.get('/room-show')
      return data
    }
  })
  // console.log("My room data is --> ",rooms);
  if(isLoading) return <Loading />

  return (
    <div1 className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7'>
      {
        rooms?.map((room)=><RoomCard key={room._id} roomData={room} />)
      }
    </div1>
  )
}
