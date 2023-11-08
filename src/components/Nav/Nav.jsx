import { Link, NavLink } from "react-router-dom";
import { BsFillSunFill, BsMoonFill } from "react-icons/bs";
import logo from "../../assets/logo.png";
import { useContext, useEffect, useState } from "react";
import { GlobalDataContext } from "../../ContextApi/DataContext";
import { toast } from "react-toastify";
import { Avatar, Dropdown, Navbar } from "flowbite-react";


//Nav Started
const Nav = () => {
  const { activeUser, userLogout, userPhoto } = useContext(GlobalDataContext);

  //Dark Mode Toggle
  const [theme, setTheme] = useState("");

  // update state on toggle
  const handleToggle = async () => {
    if (theme == "dark") {
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };

  useEffect(() => {
    const htmlElement = document.querySelector("html");
    const localTheme = localStorage.getItem("theme");

    if (localTheme == "dark") {
      setTheme("dark");
      htmlElement.classList.add("dark");
      htmlElement.classList.remove("light");
    } else {
      setTheme("light");
      htmlElement.classList.remove("dark");
      htmlElement.classList.add("light");
    }
  }, [theme]);

  return (
    <div className="pt-3">
      
    <div className="mb-3 !p-0">
      <Navbar fluid rounded>
        <Navbar.Brand>
          <Link to="/">
            <img
              src={logo}
              className="mr-3 !sm:h-16"
              alt="Flowbite React Logo"
            />
          </Link>
        </Navbar.Brand>

        <div className="flex md:order-2">
          {/* Dark Mode Toggle */}
          <div className="flex justify-center items-center text-2xl mr-2">
            {theme == "dark" ? (
              <button onClick={() => handleToggle()}>
                <BsFillSunFill className="text-white"></BsFillSunFill>
              </button>
            ) : (
              <button onClick={() => handleToggle()}>
                <BsMoonFill ></BsMoonFill>
              </button>
            )}
          </div>
          <div className="!z-50">


          {activeUser && (
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar className="!sm:mx-1 lg:mx-0 "
                  alt="User settings"
                  img={userPhoto || activeUser?.photoURL}
                  rounded
                />
              }
            >
              <div className="!z-50">
              <Dropdown.Header >
                <span className="block text-sm">{activeUser?.displayName}</span>
                <span className="block truncate text-sm font-medium">
                  {activeUser?.email}
                </span>
              </Dropdown.Header>
              </div>
              

              <Dropdown.Divider />
              <Dropdown.Item>
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
                  Sign out
                </button>
              </Dropdown.Item>
            </Dropdown>
          )}
          </div>

          <Navbar.Toggle />
        </div>

        <Navbar.Collapse>
          <Navbar.Link>
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
          </Navbar.Link>
          <Navbar.Link>
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
          </Navbar.Link>
          <Navbar.Link>
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
          </Navbar.Link>
          <Navbar.Link>
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
          </Navbar.Link>
          <Navbar.Link>
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
          </Navbar.Link>
          <Navbar.Link>
            {!activeUser && (
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
            )}
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
    </div>
  );
};

export default Nav;
