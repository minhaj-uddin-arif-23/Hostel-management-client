import axios from "axios";

export const axiosPublic = axios.create({
  baseURL:
    "https://hostel-managemet-server2-r0p0uizpw-minhaj-uddin-arifs-projects.vercel.app",
});
export default function useAxiosPublic() {
  return axiosPublic;
}
