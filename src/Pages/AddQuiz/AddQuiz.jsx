import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const AddQuiz = () => {
  const axiosSecure = useAxiosSecure();
  const handleSubmit = (e) => {
    e.preventDefault();
    const headLine = e.target.headLine.value;
    const quisqion1 = e.target.question1.value;
    const quisqion2 = e.target.question2.value;
    const quisqion3 = e.target.question3.value;
    const quisqion4 = e.target.question4.value;
    const quisqion5 = e.target.question5.value;
    const q1option1 = e.target.q1option1.value;
    const q1option2 = e.target.q1option2.value;
    const q1option3 = e.target.q1option3.value;
    const q1option4 = e.target.q1option4.value;
    const q2option1 = e.target.q2option1.value;
    const q2option2 = e.target.q2option2.value;
    const q2option3 = e.target.q2option3.value;
    const q2option4 = e.target.q2option4.value;
    const q3option1 = e.target.q3option1.value;
    const q3option2 = e.target.q3option2.value;
    const q3option3 = e.target.q3option3.value;
    const q3option4 = e.target.q3option4.value;
    const q4option1 = e.target.q4option1.value;
    const q4option2 = e.target.q4option2.value;
    const q4option3 = e.target.q4option3.value;
    const q4option4 = e.target.q4option4.value;
    const q5option1 = e.target.q5option1.value;
    const q5option2 = e.target.q5option2.value;
    const q5option3 = e.target.q5option3.value;
    const q5option4 = e.target.q5option4.value;
    const q1explanation = e.target.q1explanation.value;
    const q2explanation = e.target.q2explanation.value;
    const q3explanation = e.target.q3explanation.value;
    const q4explanation = e.target.q4explanation.value;
    const q5explanation = e.target.q5explanation.value;
    const q1answer = e.target.q1answer.value;
    const q2answer = e.target.q2answer.value;
    const q3answer = e.target.q3answer.value;
    const q4answer = e.target.q4answer.value;
    const q5answer = e.target.q5answer.value;

    const formData = {
      headline: headLine,
      questions: [
        {
          question: quisqion1,
          options: [q1option1, q1option2, q1option3, q1option4],
          answer: q1answer,
          explanation: q1explanation,
        },
        {
          question: quisqion2,
          options: [q2option1, q2option2, q2option3, q2option4],
          answer: q2answer,
          explanation: q2explanation,
        },
        {
          question: quisqion3,
          options: [q3option1, q3option2, q3option3, q3option4],
          answer: q3answer,
          explanation: q3explanation,
        },
        {
          question: quisqion4,
          options: [q4option1, q4option2, q4option3, q4option4],
          answer: q4answer,
          explanation: q4explanation,
        },
        {
          question: quisqion5,
          options: [q5option1, q5option2, q5option3, q5option4],
          answer: q5answer,
          explanation: q5explanation,
        },
      ],
    };

    axiosSecure.post("/quizes", formData).then((res) => {
      console.log(res.data);
      if (res.data?.insertedId) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your Quiz has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
        e.target.reset();
      }
    });
  };
  return (
    <div>
      <p className="text-center text-2xl font-semibold  capitalize underline">
        {" "}
        Add exciting Quiz for students!{" "}
      </p>

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto py-5 mb-5">
        <div className="mb-5">
          <label className="block mb-2  font-semibold text-gray-900 ">
            Quiz HeadLine
          </label>
          <input
            type="text"
            name="headLine"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="HeadLine"
            required
          />
        </div>
        {/* Question : 1 */}
        <div>
          <div>
            <div className="mb-5">
              <label className=" font-semibold block mb-2 text-gray-900 ">
                Question : 1
              </label>
              <input
                type="text"
                name="question1"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                required
              />
            </div>

            <div className="flex gap-4">
              {/* q1 */}
              <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Option 1
                </label>
                <input
                  type="text"
                  name="q1option1"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  required
                />
              </div>
              {/* q2 */}

              <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Option 2
                </label>
                <input
                  name="q1option2"
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  required
                />
              </div>
            </div>

            <div className="flex gap-4">
              {/* q3 */}
              <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Option 3
                </label>
                <input
                  name="q1option3"
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  required
                />
              </div>
              {/* q4 */}

              <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Option 4
                </label>
                <input
                  name="q1option4"
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  required
                />
              </div>
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Answer 1
              </label>
              <input
                name="q1answer"
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                required
              />
            </div>
            <textarea
              name="q1explanation"
              placeholder="Explanation Question 1"
              className="textarea textarea-bordered textarea-md w-full max-w-xs"
            />
          </div>
          <div>
            {/* Question : 2 */}
            <div className="mb-5">
              <label className="block mb-2  font-semibold text-gray-900 ">
                Question : 2
              </label>
              <input
                name="question2"
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                required
              />
            </div>

            <div className="flex gap-4">
              {/* q1 */}
              <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Option 1
                </label>
                <input
                  name="q2option1"
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  required
                />
              </div>
              {/* q2 */}

              <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Option 2
                </label>
                <input
                  name="q2option2"
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  required
                />
              </div>
            </div>

            <div className="flex gap-4">
              {/* q3 */}
              <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Option 3
                </label>
                <input
                  name="q2option3"
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  required
                />
              </div>
              {/* q4 */}

              <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Option 4
                </label>
                <input
                  name="q2option4"
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  required
                />
              </div>
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Answer 2
              </label>
              <input
                name="q2answer"
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                required
              />
            </div>
            <textarea
              name="q2explanation"
              placeholder="Explanation Question 1"
              className="textarea textarea-bordered textarea-md w-full max-w-xs"
            />
          </div>
        </div>
        {/* question 3 */}
        <div>
          <div>
            <div className="mb-5">
              <label className="block mb-2  font-semibold text-gray-900 ">
                Question : 3
              </label>
              <input
                name="question3"
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                required
              />
            </div>

            <div className="flex gap-4">
              {/* q1 */}
              <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Option 1
                </label>
                <input
                  name="q3option1"
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  required
                />
              </div>
              {/* q2 */}

              <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Option 2
                </label>
                <input
                  name="q3option2"
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  required
                />
              </div>
            </div>

            <div className="flex gap-4">
              {/* q3 */}
              <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Option 3
                </label>
                <input
                  name="q3option3"
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  required
                />
              </div>
              {/* q4 */}

              <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Option 4
                </label>
                <input
                  name="q3option4"
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  required
                />
              </div>
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Answer 3
              </label>
              <input
                name="q3answer"
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                required
              />
            </div>
            <textarea
              name="q3explanation"
              placeholder="Explanation Question 3"
              className="textarea textarea-bordered textarea-md w-full max-w-xs"
            />
          </div>
          <div>
            <div className="mb-5">
              <label className="block mb-2 font-semibold text-gray-900 ">
                Question : 4
              </label>
              <input
                name="question4"
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                required
              />
            </div>

            <div className="flex gap-4">
              {/* q1 */}
              <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Option 1
                </label>
                <input
                  name="q4option1"
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  required
                />
              </div>
              {/* q2 */}

              <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Option 2
                </label>
                <input
                  name="q4option2"
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  required
                />
              </div>
            </div>

            <div className="flex gap-4">
              {/* q3 */}
              <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Option 3
                </label>
                <input
                  name="q4option3"
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  required
                />
              </div>
              {/* q4 */}

              <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Option 4
                </label>
                <input
                  name="q4option4"
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  required
                />
              </div>
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Answer 4
              </label>
              <input
                name="q4answer"
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                required
              />
            </div>
            <textarea
              name="q4explanation"
              placeholder="Explanation Question 4"
              className="textarea textarea-bordered textarea-md w-full max-w-xs"
            />
          </div>
        </div>
        <div>
          <div className="mb-5">
            <label className="block mb-2  font-semibold text-gray-900 ">
              Question : 5
            </label>
            <input
              name="question5"
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              required
            />
          </div>

          <div className="flex gap-4">
            {/* q1 */}
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Option 1
              </label>
              <input
                name="q5option1"
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                required
              />
            </div>
            {/* q2 */}

            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Option 2
              </label>
              <input
                name="q5option2"
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                required
              />
            </div>
          </div>

          <div className="flex gap-4">
            {/* q3 */}
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Option 3
              </label>
              <input
                name="q5option3"
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                required
              />
            </div>
            {/* q4 */}

            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Option 4
              </label>
              <input
                name="q5option4"
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                required
              />
            </div>
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Answer 5
            </label>
            <input
              name="q5answer"
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              required
            />
          </div>
          <textarea
            name="q5explanation"
            placeholder="Explanation Question 5"
            className="textarea textarea-bordered textarea-md w-full max-w-xs"
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddQuiz;
