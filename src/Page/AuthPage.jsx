import { useState } from "react"
import Login from "../components/AuthForm/Login"
import Register from "../components/AuthForm/Register"

const AuthPage = () => {
    const [authPage, setAuthPage] = useState("Register")
  return (
    <div>
        {
            authPage == "Register" ? <Register setAuthPage={setAuthPage}></Register> : <Login setAuthPage={setAuthPage}></Login>
        }
      
      
    </div>
  )
}

export default AuthPage
