import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import QuizDataWithAnswer from "./QuizDataWithAnswer";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useAuth } from "../../Hooks/useAuth";

const SingleQuiz = () => {
  const quizData = useLoaderData();
  const [quizIndex, setQuizIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showdata, setShowdata] = useState(false);
  const { headline, questions } = quizData;
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const [secondSeconds, setSecondSeconds] = useState(0);

  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [buttonDisabel, setButtonDisabel] = useState(false);
  const navigate = useNavigate();

  // console.log(questions[0].length);

  // console.log("Quiz data form singleQuiz page", questions[quizIndex]?.answer);
  let finalScore = 0;

  // console.log("Quiz data form singleQuiz page", questions.length);

  // post score data to database
  const postScore = () => {
    axiosPublic
      .post(`/scores`, {
        score: finalScore,
        headline,
        totalQuiz: questions?.length,
        email: user?.email,
      })
      .then((res) => {
        console.log(res.data);
      });
  };

  const handleQuizNextButton = (answer, index) => {
    if (answer === questions[quizIndex]?.answer) {
      setScore(score + 1);
      finalScore = score + 1;
    }

    // increasing score

    if (quizIndex < questions.length - 1) {
      setQuizIndex(quizIndex + 1);
    }

    if (quizIndex === questions.length - 1) {
      postScore();
      setShowdata(true);
      Swal.fire({
        title: "Good job!",
        text: ` Your score is ${finalScore} `,
        icon: "success",
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds + 1);
      setSecondSeconds(secondSeconds + 1);
      if (seconds === 59) {
        setMinutes(minutes + 1);
        setSeconds(0);
      }
    }, 1000);

    return () => clearInterval(interval);
  });

  if (secondSeconds === 900) {
    // postScore();
    // setShowdata(true);
    // setButtonDisabel(true);
    let timerInterval;
    Swal.fire({
      title: "Times Up!",
      html: "Going Back To All Quizes Page in <b></b> milliseconds.",
      timer: 3000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const timer = Swal.getPopup().querySelector("b");
        timerInterval = setInterval(() => {
          timer.textContent = `${Swal.getTimerLeft()}`;
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
        navigate("/quizes");
      }
    });
  }

  return (
    <>
      {showdata ? (
        <QuizDataWithAnswer quizData={quizData} />
      ) : (
        <div className="min-h-screen w-fit mx-auto flex flex-col items-center mt-20">
          <p className="text-3xl underline font-bold">{headline} </p>
          <p className="mt-5">
            Time: {minutes < 0 ? "0" + minutes : minutes || "00"} Min{" "}
            {seconds < 10 ? "0" + seconds : seconds} Sec
          </p>

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
