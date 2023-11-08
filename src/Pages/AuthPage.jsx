import { useState } from "react";
import Register from "../Components/Auth/Register";
import Login from "../Components/Auth/Login";
import { Helmet } from "react-helmet";


const AuthPage = () => {
  const [pageToggle, setPageToggle] = useState(false);
  return <div>
     <Helmet>
        <title>Zero Hunger | Login</title>
      </Helmet>
    {
      pageToggle ? <Register setPageToggle={setPageToggle} ></Register>  : <Login setPageToggle={setPageToggle}></Login>
    }
  </div>;
};

export default AuthPage;
