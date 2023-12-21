import React from "react";
import useUserInfo from "../Hooks/useUserInfo";
import useStatistic from "../Hooks/useStatistic";

const Statistics = () => {
  const { userInfo } = useUserInfo();
  const { userStasisticData } = useStatistic();

  console.log(userInfo, userStasisticData);
  const totalScore = userStasisticData.reduce(
    (sum, result) => sum + result.score,
    0
  );
  return (
    <div className="md:w-full max-w-[90vw] mx-auto">
      <div>
        <p className="text-center font-medium  text-2xl">
          Welcome {userInfo?.name}
        </p>
        <p className="text-center font-medium  text-2xl">
          Email: {userInfo?.email}
        </p>
      </div>
      <hr className="max-w-md mx-auto " />
      <div className="flex justify-center">
        <iframe
          className="h-96 w-96"
          src="https://lottie.host/embed/9d94aba0-b760-40ca-84ec-036d99e350ca/GGpBbQHKPQ.json"
        ></iframe>
      </div>
      <div className="grid md:grid-cols-2 gap-10 my-20">
        <div>
          <div className="card  bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Quiz Count</h2>
              <p> Total Quiz: {userStasisticData?.length} </p>
            </div>
          </div>
        </div>
        <div>
          <div className="card  bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title"> Your Score </h2>
              <p>Total Score : {totalScore}</p>
            </div>
          </div>
        </div>
        <div>
          <div className="card  bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title"> Avarage Score </h2>
              <p className="capitalize">
                average score : {totalScore / userStasisticData?.length || 0}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
