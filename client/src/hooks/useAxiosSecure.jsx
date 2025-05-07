import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});
const useAxiosSecure = () => {
  const navigate = useNavigate();
  const {logOut} = useAuth();
  // interceptor for request
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  // interceptor for respose
  axiosSecure.interceptors.response.use(
    function(response) {
      return response;
    },
   async (error) => {
      if (error.response?.status === 401 || error.response?.status === 403) {
        // handle logout + redirect
        await logOut();
        navigate('/login');
        console.warn("Unauthorized access");
      }
      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
