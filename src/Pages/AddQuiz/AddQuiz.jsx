const AddQuiz = () => {
  return (
    <div>
      <p className="text-center text-2xl font-semibold underline">
        {" "}
        Add exiting Quiz for students!{" "}
      </p>

      <form className="max-w-lg mx-auto py-5 mb-5">
        <div className="mb-5">
          <label className="block mb-2  font-semibold text-gray-900 ">
            Quiz HeadLine
          </label>
          <input
            type="text"
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
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  required
                />
              </div>
            </div>
          </div>
          <div>
            {/* Question : 2 */}
            <div className="mb-5">
              <label className="block mb-2  font-semibold text-gray-900 ">
                Question : 2
              </label>
              <input
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
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  required
                />
              </div>
            </div>
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
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  required
                />
              </div>
            </div>
          </div>
          <div>
            <div className="mb-5">
              <label className="block mb-2 font-semibold text-gray-900 ">
                Question : 4
              </label>
              <input
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
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="mb-5">
            <label className="block mb-2  font-semibold text-gray-900 ">
              Question : 5
            </label>
            <input
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
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                required
              />
            </div>
          </div>
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
