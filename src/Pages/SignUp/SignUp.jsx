import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useAuth } from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { toast } from "react-toastify";

const SignUp = () => {
  const { emailPassSignup } = useAuth();
  const [userType, setUserType] = useState(undefined);
  const axiosPublic = useAxiosPublic();
  const [signupError, setSignupError] = useState(null);

  const navigate = useNavigate();

  // user type function
  const handleOptionChange = (e) => {
    setUserType(e.target.value);
  };

  // handle form function
  const handleForm = (event) => {
    event.preventDefault();
    setSignupError("");
    // get the values from form
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;
    const name = event.target.name.value;
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
    const userInfo = {
      email,
      name,
      role: userType,
    };

    emailPassSignup(email, password)
      .then((res) => {
        const currentUser = res.user;
        if (currentUser) {
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              toast("🦄SignUp Successfull !", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
              navigate("/");
            }
          });
        }
      })
      .catch((err) => {
        setSignupError(err.message);
      });
  };

  return (
    <div>
      <div className="bg-gray-50 flex  flex-col-reverse md:flex-row  items-center py-5 lg:py-0  justify-around ">
        <div className="flex flex-col  items-center justify-center   py-8 lg:w-[40rem]  md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl  text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl d">
                Create and account
              </h1>
              <form
                onSubmit={handleForm}
                className="space-y-4 md:space-y-6"
                action="#"
              >
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Jhon Doe"
                    required={true}
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="name@company.com"
                    required={true}
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required={true}
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">
                    Confirm password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirm-password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required={true}
                  />
                </div>

                <div>
                  <label className="block mb-2 capitalize text-sm font-medium text-gray-900 ">
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
                <p className="text-red-500 text-xs italic">
                  {/* {userSignUpError} */}
                  {signupError}
                </p>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                      required
                    />
                  </div>

                  <div className="ml-3 text-sm">
                    <label className="font-light text-gray-500 ">
                      I accept the{" "}
                      <span className="font-medium text-primary-600 hover:underline ">
                        Terms and Conditions
                      </span>
                    </label>
                  </div>
                </div>
                <input
                  type="submit"
                  value={" Create an account"}
                  className="w-full text-black btn  bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center d"
                />

                <p className="text-sm font-light text-gray-500 ">
                  Already have an account?{" "}
                  <Link
                    to={"/logIn"}
                    className="font-medium text-primary-600 hover:underline "
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
