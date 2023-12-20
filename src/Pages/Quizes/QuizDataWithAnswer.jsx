import React from "react";

const QuizDataWithAnswer = ({ quizData }) => {
  //   console.log(quizData);
  const { headline, questions } = quizData;
  return (
    <div className="py-10 max-w-[95vw] mx-auto ">
      <p className="text-center font-semibold text-3xl my-10 underline">
        {" "}
        {headline}{" "}
      </p>
      <div className="grid lg:grid-cols-3  gap-5">
        {questions?.map((question, index) => {
          //   console.log(question);
          return (
            <div key={index} className="card w-full  bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">
                  {" "}
                  Question No {index + 1}: {question?.question}
                </h2>
                <p>
                  {" "}
                  <span className="font-medium">Correct Answer:</span>{" "}
                  {question?.answer}
                </p>
                <p>
                  {" "}
                  <span className="font-medium"> Explanation : </span>{" "}
                  {question?.explanation}{" "}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuizDataWithAnswer;
