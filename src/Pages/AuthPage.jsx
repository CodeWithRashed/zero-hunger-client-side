import { useState } from "react";
import Register from "../Components/Auth/Register";
import Login from "../Components/Auth/Login";


const AuthPage = () => {
  const [pageToggle, setPageToggle] = useState(false);
  return <div>
    {
      pageToggle ? <Register setPageToggle={setPageToggle} ></Register>  : <Login setPageToggle={setPageToggle}></Login>
    }
  </div>;
};

export default AuthPage;
