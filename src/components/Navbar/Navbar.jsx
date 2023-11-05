import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { CiDark } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { WiDayCloudy } from "react-icons/wi";

const Navbar = () => {
  // Theme Toggle Button

  // Theme Toggle Button

  return (
    <div>
      <header>
        <nav
          className="
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          md:py-0
          px-4
          text-lg text-gray-700
          bg-white
        "
        >
          <div>
            <a href="#">
            <img src={logo} alt="" />
            </a>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="menu-button"
            className="h-6 w-6 cursor-pointer md:hidden block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>

          <div
            className="hidden w-full md:flex md:items-center md:w-auto"
            id="menu"
          >
            <ul
              className="
              pt-4
              text-base text-gray-700
              md:flex
              md:justify-between 
              md:pt-0"
            >
              <li>
                <a className="md:p-4 py-2 block hover:text-purple-400" href="#">
                  Features
                </a>
              </li>
              <li>
                <a className="md:p-4 py-2 block hover:text-purple-400" href="#">
                  Pricing
                </a>
              </li>
              <li>
                <a className="md:p-4 py-2 block hover:text-purple-400" href="#">
                  Customers
                </a>
              </li>
              <li>
                <a className="md:p-4 py-2 block hover:text-purple-400" href="#">
                  Blog
                </a>
              </li>
              <li>
                <a
                  className="md:p-4 py-2 block hover:text-purple-400 text-purple-500"
                  href="#"
                >
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
