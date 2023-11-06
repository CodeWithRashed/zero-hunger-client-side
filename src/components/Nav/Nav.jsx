import { Link, NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { BsFillSunFill, BsMoonFill } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import logo from "../../assets/logo.png";
import { useContext, useEffect, useState } from "react";
import { GlobalDataContext } from "../../ContextApi/DataContext";
import { toast } from "react-toastify";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
const Nav = () => {
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

  return (
    <div>
      <Navbar fluid rounded>
        <Navbar.Brand>
          <img
            src={logo}
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          />
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img={userPhoto || activeUser?.photoURL}
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">{activeUser?.displayName}</span>
              <span className="block truncate text-sm font-medium">
                {activeUser?.email}
              </span>
            </Dropdown.Header>

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
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Nav;
