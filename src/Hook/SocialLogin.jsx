import React from 'react'
import { FaGoogle } from 'react-icons/fa'

import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import useAuth from './useAuth'
import useAxiosPublic from './useAxiosPublic'

function SocialLogin() {
    const {google} =useAuth()
  const axiosPublic = useAxiosPublic()
  const navigate = useNavigate()
  const handleGoogleLogin = () =>{
    google()
    .then(result => {
      const userInfo = {
        email:result.user?.email,
        name:result.user?.displayName
      }
      axiosPublic.post('/users',userInfo)
      .then(res => {
        if(res.data.insertedId){
          toast.success("data updated successfully");
          navigate('/')
        }
      })
      // console.log(result.user)
    }).catch((err) => {
            // console.log(err?.message);
            toast.error("Error found",err?.message)
          });
  }
  return (
    <div>
        <button
              className="btn text-black bg-lime-300 ml-32 my-4"
              onClick={handleGoogleLogin}
            >
               <FaGoogle /> Google
            </button>
    </div>
  )
}

export default SocialLogin