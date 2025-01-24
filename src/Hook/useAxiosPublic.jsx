import axios from "axios";

export const axiosPublic = axios.create({
  baseURL: "https://hostel-managemet-server2.vercel.app",
});
export default function useAxiosPublic() {
  return axiosPublic;
}
