import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useReservation = () => {
  const axiosPublic = useAxiosPublic();

  const {data: reservation = [], isPending: isLoading, refetch} = useQuery({
    queryKey: ['reservation'],
    queryFn: async()=>{
      const res = await axiosPublic.get('/reservations');
      return res.data;
    }
  })
  return [reservation, isLoading,refetch];
};

export default useReservation;
