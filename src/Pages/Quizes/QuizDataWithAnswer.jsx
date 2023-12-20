import React from "react";

const QuizDataWithAnswer = ({ quizData }) => {
  console.log(quizData);
  const { headline, questions } = quizData;
  return (
    <div className="py-10">
      <p className="text-center font-semibold text-3xl my-10"> {headline} </p>
      <div className="grid lg:grid-cols-3 gap-5">
        {questions?.map((question, index) => {
          return (
            <div key={index} className="card w-fit  bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">
                  {" "}
                  Question No {index + 1}: {question?.question}
                </h2>
                <p> Correct Answer: {question?.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuizDataWithAnswer;
