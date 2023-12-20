import { Link } from "react-router-dom";
import NavItem from "./NavItem";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useAuth } from "../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const NavBar = () => {
  const axiosSecure = useAxiosSecure();
  const { signoutUser, user, userloading } = useAuth();

  // const { demoUser } = useContext(AuthContext);
  // console.log(demoUser);
  // signOut button handler
  const handleSignOut = () => {
    signoutUser()
      .then(() => {})
      .catch((err) => {
        // console.log(err);
      });
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Logout Successfull !",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  // get user form database
  const { data: userData } = useQuery({
    queryKey: ["user"],
    enabled: !!user?.email && !userloading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/${user?.email}`);
      return res.data;
    },
  });
  console.log(userData);

  const navItems = (
    <>
      <li>
        <NavItem itemName={"Home"} pathName={"/"} />
      </li>

      {user ? (
        <li>
          <NavItem itemName={"Quizes"} pathName={"quizes"} />
        </li>
      ) : (
        ""
      )}

      {user ? (
        ""
      ) : (
        <li>
          <NavItem itemName={"Login"} pathName={"logIn"} />
        </li>
      )}
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm  dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {/* <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li> */}
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost text-xl">
            NexusQuiz
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal space-x-3 px-1">
            {/* <li>
              <a>Item 1</a>
            </li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Item 3</a>
            </li> */}

            {navItems}
          </ul>
        </div>
        {user && (
          <div onClick={handleSignOut} className="navbar-end ">
            <span className="btn">Logout</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
