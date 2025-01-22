import React, { useContext } from 'react'
import { AuthContext } from '../Provider/AuthProvider'

export default function useAuth() {
  const auth = useContext(AuthContext)
  // console.log(auth)
  return auth
}


// const mealrequest = async () => {
//   try {

//     const res = await axiosSequre.get(
//       `/user-requests/${user?.email}`,
     
//     );
//     // console.log("meal request--> ", res.data);
//     if (res.data.success === true) {
//       toast.success("Your meal request in pending");
//     } else {
//       toast.error("You have no subscription");
//     }
//   } catch (error) {
//     toast.error("You have no subscription");
//   }
// };
