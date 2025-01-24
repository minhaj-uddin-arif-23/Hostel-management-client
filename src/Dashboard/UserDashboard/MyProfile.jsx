import React from 'react'
import useAuth from '../../Hook/useAuth'
import useAxiosSecure from '../../Hook/useAxiosSecure'
import { useQuery } from '@tanstack/react-query'
import { Helmet } from 'react-helmet'

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
  // console.log(myProfile)
  return (
    <div>
      <Helmet>
        <title> Hostel Management | user Profile</title>
      </Helmet>
      <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
  <h2 className="text-xl font-semibold text-gray-700 mb-4">My Profile</h2>
  <div className="overflow-x-auto">
    <table className="table-auto w-full border-collapse border border-gray-200">
      {/* Table Header */}
      <thead>
        <tr className="bg-gray-100 text-left">
          <th className="p-4 text-sm font-medium text-gray-600">Name</th>
          <th className="p-4 text-sm font-medium text-gray-600">Image</th>
          <th className="p-4 text-sm font-medium text-gray-600">Email</th>
          <th className="p-4 text-sm font-medium text-gray-600">Badge</th>
        </tr>
      </thead>
      {/* Table Body */}
      <tbody>
        <tr className="bg-gray-50 hover:bg-gray-100 transition duration-200">
          <td className="p-4 text-gray-700 text-sm font-medium">{user?.displayName || "John Doe"}</td>
          <td className="p-4">
            <img
              src={myProfile?.image || "https://via.placeholder.com/50"}
              alt="Profile"
              className="w-12 h-12 rounded-full object-cover border border-gray-200"
            />
          </td>
          <td className="p-4 text-gray-700 text-sm">{user?.email || "johndoe@example.com"}</td>
          <td className="p-4">
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                myProfile?.badge ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-500"
              }`}
            >
              {myProfile?.badge || "No Badge"}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

    </div>
  )
}

export default MyProfile