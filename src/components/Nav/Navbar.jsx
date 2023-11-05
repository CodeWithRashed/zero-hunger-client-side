import { Link, NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { BsFillSunFill, BsMoonFill } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import logo from "../../assets/logo.png";
import { useContext, useEffect, useState } from "react";
import { GlobalDataContext } from "../../ContextApi/DataContext";
import { toast } from "react-toastify";
const Navbar = () => {
  const { activeUser, userLogout, userPhoto } = useContext(GlobalDataContext);

  //Dark Mode Toggle
  const [theme, setTheme] = useState("");
  const [icon, setIcon] = useState("");

  // update state on toggle
  const handleToggle = async (event) => {
    if (event.target.checked) {
      localStorage.setItem("theme", "dark");
      setIcon("dark");
      setTheme("dark");
      if (icon == "dark") {
        setTheme("light");
        setIcon("light");
        localStorage.setItem("theme", "light");

      }

    }

    if (!event.target.checked) {
      localStorage.setItem("theme", "light");
      setTheme("light");
      setIcon("light");
      if (icon == "light") {
        setTheme("dark");
        setIcon("dark");
        localStorage.setItem("theme", "dark");

      }

    }
  };

  useEffect(() => {
    const htmlElement = document.querySelector("html");
    const localTheme = localStorage.getItem("theme");
    setIcon(localTheme);
    if (localTheme == "dark") {
      htmlElement.classList.add("dark");
      htmlElement.classList.remove("light");
      setIcon("dark");
    } else {
      htmlElement.classList.remove("dark");
      htmlElement.classList.add("light");
      setIcon("light");
    }
  }, [theme, icon]);

  const mobileNav = (
    <div className="dark:bg-gray-800 dark:text-white">
       <ul className="flex justify-between items-center gap-5">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
                    : isActive
                    ? "font-bold  text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
                    : ""
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/foods"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
                    : isActive
                    ? "font-bold  text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
                    : ""
                }
              >
                Available Food
              </NavLink>
              <NavLink
                to="/add"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
                    : isActive
                    ? "font-bold  text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
                    : ""
                }
              >
                Add Food
              </NavLink>
              <NavLink
                to="/manage"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
                    : isActive
                    ? "font-bold  text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
                    : ""
                }
              >
                Manage Food
              </NavLink>
              <NavLink
                to="/request"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
                    : isActive
                    ? "font-bold  text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
                    : ""
                }
              >
                Food Requests
              </NavLink>
              <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
                    : isActive
                    ? "font-bold  text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
                    : ""
                }
              >
                Login/Sign Up
              </NavLink>

              {/* Dark Toggle Button Star*/}
              <NavLink>
                {/* this hidden checkbox controls the state */}
            <input onChange={handleToggle} type="checkbox" />
            {icon == "dark" ? (
              <BsFillSunFill className="flex justify-center items-center h-full"></BsFillSunFill>
            ) : (
              <BsMoonFill className="text-left"></BsMoonFill>
            )}
          
              </NavLink>
              {/* Dark Toggle ButtonEnd */}
              {/* Profile Picture */}
              {/* <img
                className="hidden lg:inline-block h-[2.375rem] w-[2.375rem] rounded-full ring-2 ring-white dark:ring-gray-800"
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                alt="Image Description"
              ></img> */}
              {/* Profile Picture */}
            </ul>

    </div>
  );
  const desktopNav = (
    <div className="hidden text-lg lg:block menu menu-horizontal dark:text-white dark:bg-gray-800 bg-base-100">
       <ul className="flex justify-between items-center gap-5">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
                    : isActive
                    ? "font-bold  text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
                    : ""
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/foods"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
                    : isActive
                    ? "font-bold  text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
                    : ""
                }
              >
                Available Food
              </NavLink>
              <NavLink
                to="/add"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
                    : isActive
                    ? "font-bold  text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
                    : ""
                }
              >
                Add Food
              </NavLink>
              <NavLink
                to="/manage"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
                    : isActive
                    ? "font-bold  text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
                    : ""
                }
              >
                Manage Food
              </NavLink>
              <NavLink
                to="/request"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
                    : isActive
                    ? "font-bold  text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
                    : ""
                }
              >
                Food Requests
              </NavLink>
              <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
                    : isActive
                    ? "font-bold  text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
                    : ""
                }
              >
                Login/Sign Up
              </NavLink>

              {/* Dark Toggle Button Star*/}
              <NavLink>
                {/* this hidden checkbox controls the state */}
            <input onChange={handleToggle} type="checkbox" />
            {icon == "dark" ? (
              <BsFillSunFill className="flex justify-center items-center h-full"></BsFillSunFill>
            ) : (
              <BsMoonFill className="text-left"></BsMoonFill>
            )}
          
              </NavLink>
              {/* Dark Toggle ButtonEnd */}
              {/* Profile Picture */}
              {/* <img
                className="hidden lg:inline-block h-[2.375rem] w-[2.375rem] rounded-full ring-2 ring-white dark:ring-gray-800"
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                alt="Image Description"
              ></img> */}
              {/* Profile Picture */}
            </ul>
    </div>
  );
  return (
    <div>
      
      <div className="navbar bg-base-100 dark:bg-gray-800 px-[5%]">
        <div className="flex-1">
          <Link>
            <img className="w-4/5 lg:w-3/4" src={logo} alt="logo" />
          </Link>
        </div>

        {/* Desktop Navbar Start */}
        <div>{desktopNav}</div>
        {/* Desktop Navbar End */}

        <div className="flex-none">
          <div className="dropdown dropdown-end lg:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <FiMenu className="text-3xl dark:text-white"></FiMenu>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3  z-[100] card card-compact dropdown-content w-52 dark:bg-gray-800 bg-base-100 shadow"
            >
              {/* Mobile Navbar Start */}
              <div>{mobileNav}</div>
              {/* Mobile Navbar End */}
            </div>
          </div>
          {activeUser && (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  {activeUser ? (
                    <img src={userPhoto || activeUser?.photoURL} alt="" />
                  ) : (
                    <FaUserCircle className="h-full w-full"></FaUserCircle>
                  )}
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">Profile</a>
                </li>

                <li>
                  <button
                    onClick={() => {
                      userLogout();
                      toast.success("Logout Successful", {
                        position: "top-center",
                        autoClose: 2000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                      });
                    }}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
