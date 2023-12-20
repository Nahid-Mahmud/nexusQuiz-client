import React from "react";
import Login from "../Login/Login";

const Home = () => {
  return (
    <div className="bg-slate-100">
      <div className="flex flex-col-reverse md:flex-row max-w-[95vw] mx-auto min-h-[90vh]  items-center justify-around">
        <div className="text-center">
          <h1 className="md:text-5xl text-3xl font-bold  max-w-md">
            {" "}
            Welcome to Nexus Quiz
          </h1>
          <p className="py-6 max-w-md">
            Your Gateway to Knowledge and Fun! Immerse yourself in a world of
            quizzes that challenge, entertain, and enlighten. Explore a diverse
            range of topics, test your intellect, and enjoy the thrill of
            learning.
          </p>
        </div>
        <div>
          <iframe
            className="md:h-96 md:w-96 h-80 "
            src="https://lottie.host/embed/876f897e-c2e0-431b-b21c-3b4dc33ee892/jdDH6X9FL0.json"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Home;
