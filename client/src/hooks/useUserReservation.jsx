import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth"; 

const useUserReservation = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();

  const { data: reservation = [], isPending: isLoading, refetch } = useQuery({
    queryKey: ['reservation', user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/reservation?email=${user.email}`);
      return res.data;
    },
    enabled: !!user?.email, 
  });

  return [reservation, isLoading, refetch];
};

export default useUserReservation;
