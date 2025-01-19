
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

export default function useAdmin() {
  const { user } = useAuth();
  const axiosSequre = useAxiosSecure();
  const { data: isAdmin,isPending:isAdminPending } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    queryFn: async () => {
      const res = await axiosSequre.get(`/user/admin/${user?.email}`);
      // console.log(res.data);
      return res.data?.admin;
    },
  });
  return [isAdmin,isAdminPending];
}
