import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { CiDark } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { WiDayCloudy } from "react-icons/wi";

const Navbar = () => {
  // Theme Toggle Button
  const HSThemeAppearance = {
    init() {
      const defaultTheme = "default";
      let theme = localStorage.getItem("hs_theme") || defaultTheme;

      if (document.querySelector("html").classList.contains("dark")) return;
      this.setAppearance(theme);
    },
    _resetStylesOnLoad() {
      const $resetStyles = document.createElement("style");
      $resetStyles.innerText = `*{transition: unset !important;}`;
      $resetStyles.setAttribute("data-hs-appearance-onload-styles", "");
      document.head.appendChild($resetStyles);
      return $resetStyles;
    },
    setAppearance(theme, saveInStore = true, dispatchEvent = true) {
      const $resetStylesEl = this._resetStylesOnLoad();

      if (saveInStore) {
        localStorage.setItem("hs_theme", theme);
      }

      if (theme === "auto") {
        theme = window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "default";
      }

      document.querySelector("html").classList.remove("dark");
      document.querySelector("html").classList.remove("default");
      document.querySelector("html").classList.remove("auto");

      document
        .querySelector("html")
        .classList.add(this.getOriginalAppearance());

      setTimeout(() => {
        $resetStylesEl.remove();
      });

      if (dispatchEvent) {
        window.dispatchEvent(
          new CustomEvent("on-hs-appearance-change", { detail: theme })
        );
      }
    },
    getAppearance() {
      let theme = this.getOriginalAppearance();
      if (theme === "auto") {
        theme = window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "default";
      }
      return theme;
    },
    getOriginalAppearance() {
      const defaultTheme = "default";
      return localStorage.getItem("hs_theme") || defaultTheme;
    },
  };
  HSThemeAppearance.init();
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", () => {
      if (HSThemeAppearance.getOriginalAppearance() === "auto") {
        HSThemeAppearance.setAppearance("auto", false);
      }
    });
  window.addEventListener("load", () => {
    const $clickableThemes = document.querySelectorAll(
      "[data-hs-theme-click-value]"
    );
    const $switchableThemes = document.querySelectorAll(
      "[data-hs-theme-switch]"
    );

    $clickableThemes.forEach(($item) => {
      $item.addEventListener("click", () =>
        HSThemeAppearance.setAppearance(
          $item.getAttribute("data-hs-theme-click-value"),
          true,
          $item
        )
      );
    });

    $switchableThemes.forEach(($item) => {
      $item.addEventListener("change", (e) => {
        HSThemeAppearance.setAppearance(e.target.checked ? "dark" : "default");
      });

      $item.checked = HSThemeAppearance.getAppearance() === "dark";
    });

    window.addEventListener("on-hs-appearance-change", (e) => {
      $switchableThemes.forEach(($item) => {
        $item.checked = e.detail === "dark";
      });
    });
  });
  // Theme Toggle Button

  return (
    <div>
      <header className="flex flex-wrap items-center sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-lg py-4 dark:bg-gray-800">
        <nav
          className="w-full mx-auto sm:flex sm:items-center sm:justify-between"
          aria-label="Global"
        >
          <div className="flex items-center w-full lg:w-auto justify-between">
            <Link
              to="/"
              className="flex-none text-xl font-semibold dark:text-white"
            >
              <img src={logo} alt="" />
            </Link>
            
            {/* Mobile Menu Icon */}
            <div className="lg:hidden">
              <img className="inline-block ml-2 h-[2.375rem] w-[2.375rem] rounded-full ring-2 ring-white dark:ring-gray-800" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image Description"></img>
              <button
                type="button"
                className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                data-hs-collapse="#navbar-with-collapse"
                aria-controls="navbar-with-collapse"
                aria-label="Toggle navigation"
              >
                <GiHamburgerMenu></GiHamburgerMenu>
              </button>
            </div>
            {/* Mobile Menu Icon */}
          </div>
          <div
            id="navbar-with-collapse"
            className="hidden basis-full grow lg:block"
          >
            <div className="lg:flex md:hidden flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                isPending ? "font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" : isActive ? "font-bold  text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" : ""
              }
              >
                Home
              </NavLink>
              <NavLink
                to="/foods"
                className={({ isActive, isPending }) =>
                isPending ? "font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" : isActive ? "font-bold  text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" : ""
              }
              >
                Available Food
              </NavLink>
              <NavLink
                to="/add"
                className={({ isActive, isPending }) =>
                isPending ? "font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" : isActive ? "font-bold  text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" : ""
              }
              >
                Add Food
              </NavLink>
              <NavLink
                to="/manage"
                className={({ isActive, isPending }) =>
                isPending ? "font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" : isActive ? "font-bold  text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" : ""
              }
              >
                Manage Food
              </NavLink>
              <NavLink
                to="/request"
                className={({ isActive, isPending }) =>
                isPending ? "font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" : isActive ? "font-bold  text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" : ""
              }
              >
                Food Requests
              </NavLink>
              <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                isPending ? "font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" : isActive ? "font-bold  text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" : ""
              }
               
              >
                Login/Sign Up
              </NavLink>

           

              {/* Dark Toggle Button Star*/}
              <NavLink >
                <button
                  className="hs-dark-mode-active:hidden block hs-dark-mode group  items-center text-gray-600 hover:text-blue-600 font-medium dark:text-gray-400 dark:hover:text-gray-500"
                  data-hs-theme-click-value="dark"
                >
                  <CiDark className="text-3xl"></CiDark>
                </button>
                <button
                  className="hs-dark-mode-active:block hidden hs-dark-mode group  items-center text-gray-600 hover:text-blue-600 font-medium dark:text-gray-400 dark:hover:text-gray-500"
                  data-hs-theme-click-value="light"
                >
                  <WiDayCloudy className="text-3xl"></WiDayCloudy>
                </button>
              </NavLink>
              {/* Dark Toggle ButtonEnd */}
                 {/* Profile Picture */}
                 <img className="hidden lg:inline-block h-[2.375rem] w-[2.375rem] rounded-full ring-2 ring-white dark:ring-gray-800" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image Description"></img>
              {/* Profile Picture */}
            </div>
          </div>
        </nav>
        
      </header>
    </div>
  );
};

export default Navbar;
