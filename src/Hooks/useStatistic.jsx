import React from "react";
import { useAuth } from "./useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useStatistic = () => {
  const { user, userloading } = useAuth();
  const axiosPublic = useAxiosPublic();

  const { data: userStasisticData = [] } = useQuery({
    queryKey: ["statisticdatainfo"],
    enabled: !!user?.email && !userloading,
    queryFn: async () => {
      const res = await axiosPublic.get(`scores/${user?.email}`);
      return res.data;
    },
  });

  return { userStasisticData };
};

export default useStatistic;
