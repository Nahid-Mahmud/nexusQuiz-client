import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";

const Quizes = () => {
  const navigete = useNavigate();
  const axiosSecure = useAxiosSecure();
  const { data: quizData } = useQuery({
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

  console.log(quizData);
  return (
    <div>
      <div className="max-w-[95vw] mx-auto">
        <div>
          <p className="text-center text-2xl font-semibold "> All Quizes </p>
        </div>
        <div className="text-center gap-3 my-5 p-3 flex flex-col shadow-2xl max-w-lg mx-auto ">
          {quizData?.map((quiz, index) => {
            return (
              <p
                onClick={() => handleQuiz(quiz?._id)}
                className="btn overflow-hidden"
                key={index}
              >
                {" "}
                Quiz No {index + 1}: {quiz?.headline}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Quizes;
