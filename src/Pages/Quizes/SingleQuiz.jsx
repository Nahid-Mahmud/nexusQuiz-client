import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleQuiz = () => {
  const quizData = useLoaderData();
  console.log("Quiz data form singleQuiz page", quizData);
  return <div></div>;
};

export default SingleQuiz;
