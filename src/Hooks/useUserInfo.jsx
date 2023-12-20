import React from "react";
import { useAuth } from "./useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAxiosSecure from "./useAxiosSecure";

const useUserInfo = () => {
  const { user, userloading } = useAuth();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const { data: userInfo } = useQuery({
    queryKey: ["userInfoHook"],
    enabled: !!user?.email && !userloading,
    queryFn: async () => {
      const res = await axiosPublic.get(`/user/${user?.email}`);
      return res.data;
    },
  });

  return { userInfo };
};

export default useUserInfo;
