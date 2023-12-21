import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";
import useUserInfo from "../../Hooks/useUserInfo";

const Quizes = () => {
  const navigete = useNavigate();
  const axiosSecure = useAxiosSecure();
  const { userInfo } = useUserInfo();
  const isTeacher = userInfo?.role === "teacher" ? true : false;
  const isStudent = userInfo?.role === "student" ? true : false;

  const { data: quizData = [] } = useQuery({
    queryKey: ["quizes"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/quizes`);
      return res.data;
    },
  });

  const handleQuiz = (id) => {
    navigete(`/quiz/${id}`);
    console.log(id);
  };

  // console.log(quizData);
  return (
    <div className="min-h-[80vh]">
      <p className="text-center text-2xl font-semibold mt-5 underline">
        {" "}
        All Quizes{" "}
      </p>
      <div className="max-w-[95vw] flex flex-col-reverse md:flex-row items-center justify-center  mx-auto">
        <div className="text-center gap-3 my-5  flex flex-col  rounded-md max-w-lg mx-auto ">
          {quizData?.map((quiz, index) => {
            return (
              <p
                onClick={() => handleQuiz(quiz?._id)}
                className="btn md:text-lg min-h-14 md:min-h-16 lg:min-h-0  text-sm  "
                key={index}
              >
                {" "}
                Quiz No {index + 1} :{" "}
                <span className="font-normal text-sm md:text-base ">{quiz?.headline}</span>
              </p>
            );
          })}
        </div>
        <div>
          <iframe
            className="h-96 w-96"
            src="https://lottie.host/embed/9bdc1fdc-b62c-4ea8-87a2-7acf7b1d1b56/UF48GaLHzy.json"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Quizes;
