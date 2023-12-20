import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useAuth } from "../../Hooks/useAuth";

const SignUp = () => {
  const {emailPassSignup} = useAuth();
  const [userType, setUserType] = useState(undefined);

  // user type function
  const handleOptionChange = (e) => {
    setUserType(e.target.value);
  };

  // handle form function
  const handleForm = (event) => {
    event.preventDefault();
    // get the values from form
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;
    if (userType === undefined) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Select a user type!",
      });
      return;
    }
    if (password !== confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password and confirm password does not match!",
      });
      return;
    }

    console.log(email, password, userType, confirmPassword);


    


  };

  return (
    <div>
      <div className="bg-gray-50 flex  flex-col-reverse md:flex-row  items-center py-5 lg:py-0  justify-around ">
        <div className="flex flex-col  items-center justify-center   py-8 lg:w-[40rem]  md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl  text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create and account
              </h1>
              <form
                onSubmit={handleForm}
                className="space-y-4 md:space-y-6"
                action="#"
              >
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required={true}
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required={true}
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Confirm password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirm-password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required={true}
                  />
                </div>

                <div>
                  <label className="block mb-2 capitalize text-sm font-medium text-gray-900 dark:text-white">
                    Select A user Type
                  </label>
                  <select
                    name="option"
                    onChange={handleOptionChange}
                    value={userType}
                    className="select select-bordered w-full "
                  >
                    <option disabled selected>
                      Select An option
                    </option>
                    <option value={"teacher"}>Teacher</option>
                    <option value={"student"}>Student</option>
                  </select>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label className="font-light text-gray-500 dark:text-gray-300">
                      I accept the{" "}
                      <span className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                        Terms and Conditions
                      </span>
                    </label>
                  </div>
                </div>
                <input
                  type="submit"
                  value={" Create an account"}
                  className="w-full text-black btn  bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                />

                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <Link
                    to={"/logIn"}
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Login here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>

        <div>
          <iframe
            className="lg:h-96 lg:w-96 md:w-80 md:h-80"
            src="https://lottie.host/embed/3a2015f0-8bd3-48e3-87c5-2e5a9cf82491/e7k8PrV1Jc.json"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
