import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import QuizDataWithAnswer from "./QuizDataWithAnswer";

const SingleQuiz = () => {
  const quizData = useLoaderData();
  const [quizIndex, setQuizIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showdata, setShowdata] = useState(false);
  const { headline, questions } = quizData;
  // console.log(questions[0].length);

  // console.log("Quiz data form singleQuiz page", questions[quizIndex]?.answer);
  let x = 0;

  // console.log("Quiz data form singleQuiz page", questions.length);

  const handleQuizNextButton = (answer, index) => {
    if (answer === questions[quizIndex]?.answer) {
      setScore(score + 1);
      x = score + 1;
    }

    // increasing score

    if (quizIndex < questions.length - 1) {
      setQuizIndex(quizIndex + 1);
    }

    if (quizIndex === questions.length - 1) {
      // alert("Your score is " + score);
      setShowdata(true);
      Swal.fire({
        title: "Good job!",
        text: ` Your score is ${x} `,
        icon: "success",
      });
    }
  };
  // console.log("score", score);
  return (
    <>
      {showdata ? (
        <QuizDataWithAnswer quizData={quizData} />
      ) : (
        <div className="min-h-screen w-fit mx-auto flex flex-col items-center mt-20">
          <p className="text-3xl underline font-bold">{headline}</p>

          <div className="card max-w-xl bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className=" text-2xl font-medium text-center">
                {questions[quizIndex].question}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {questions[quizIndex]?.options.map((option, index) => {
                  return (
                    <div
                      onClick={() => handleQuizNextButton(option, index)}
                      className="btn"
                      key={index}
                    >
                      {option}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleQuiz;
