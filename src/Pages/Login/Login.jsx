import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Hooks/useAuth";
import { toast } from "react-toastify";
import { useState } from "react";

const Login = () => {
  const { emailPassLogin } = useAuth();
  const [loginError, setLoginError] = useState(""); // [loginError, setLoginError
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoginError("");
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log("form submitted", email, password);
    emailPassLogin(email, password)
      .then((res) => {
        console.log(res);
        toast("Login Successfull", {
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
      })
      .catch((err) => {
        console.log(err);
        setLoginError(err.message);
      });
  };
  return (
    <div>
      <section className="bg-gray-50">
        <div className="flex flex-col-reverse gap-3 md:flex-row  items-center justify-around px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form
                onSubmit={handleSubmit}
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
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required
                  />
                </div>
                {loginError && (
                  <p className="text-red-500 text-xs italic">{loginError}</p>
                )}
                <button
                  type="submit"
                  className="w-full text-black btn bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign in
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <Link
                    to={"/signUp"}
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
          <div>
            <iframe
              className="lg:h-96 lg:w-96 h-80 md:w-80 md:h-80"
              src="https://lottie.host/embed/cb65e077-fdb3-4b0e-b347-d52146e25aec/EgTdzL7eO8.json"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
