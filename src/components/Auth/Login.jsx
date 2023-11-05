import PropTypes from "prop-types";
import { GlobalDataContext } from "../../ContextApi/DataContext";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

const Login = ({ setPageToggle }) => {
  const location = useLocation();
  const { googleLogin, loginWithEmail } = useContext(GlobalDataContext);
  const [loginError, setLoginError] = useState(null);
  const navigator = useNavigate();
  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    loginWithEmail(email, password)
      .then(() => {
        toast.success("Login Successful, Redirecting", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setLoginError(null)
        setTimeout(() => {
          navigator(location.state ? location.state : "/");
        }, "2000");
      })
      .catch((error) => {
        if (error) {
          setLoginError("Invalid login credentials");
        }
      });
  };

  //Google Login
  const loginWithGoogle = () => {
    googleLogin()
    .then(async(user) => {
      console.log(user.user);
      const name = await user.user.displayName;
      const email = await user.user.email;
      const imageUrl = await user.user.photoURL;

      const googleUser = { name, email, imageUrl };
  
       await fetch(
        `${import.meta.env.VITE_BACKEND_API}/api/v1/add/user`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(googleUser),
        })
      navigator(location.state ? location.state : "/");
      setTimeout(() => {
        toast.success("Login Successful, Redirecting", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }, 2000);
    })
      .catch((err) => {
        if (err) {
          setLoginError("Invalid login credentials");
        }
      })
  };

  return (
    <div>
      <div className="lg:px-10 lg:py-20">
        <div className="lg:w-1/2 shadow-lg border-x-2 border-t-2 border-red-200 rounded-t-xl h-1/2 mx-auto p-8">
          Login
        </div>
        <div className="lg:w-1/2 shadow-2xl h-1/2 mx-auto p-8 rounded-b-xl">
          <form onSubmit={handleLoginSubmit} className="flex flex-col gap-5">
            {/* Email Field */}
            <div className="flex flex-col gap-1">
              <span>Your Email</span>
              <input
                required
                className="border-2 p-2 rounded-xl border-red-200"
                type="email"
                placeholder="Enter Your Email..."
                name="email"
               
              />
            </div>

            {/* Password Field */}
            <div className="flex flex-col gap-1">
              <span>Password</span>
              <input
                className="border-2 p-2 rounded-xl border-red-200"
                type="password"
                placeholder="Type Your Password..."
                name="password"
               
                required
              />
            </div>

            <button
              className="border-2 p-2 rounded-xl border-red-200"
              type="submit"
            >
              Login
            </button>
          </form>
          {loginError ? <p className="text-center text-red-500 my-2">{loginError}</p> : ""}
          <div className="cta mt-4 text-center">
            <span className="mr-3">New Here?</span>
            <button
              className="text-blue-500 "
              onClick={() => {
                setPageToggle(true);
              }}
            >
              Create an Account
            </button>
            <div>
              <p>or</p>
              <span>Login With</span>
              <button
                className="border-2 border-red-200 p-2 ml-2 rounded-xl mt-3"
                onClick={() => {
                  loginWithGoogle()
                  
                  
                }}
              >
                Google Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Login.propTypes = {
  setPageToggle: PropTypes.func,
};

export default Login;
