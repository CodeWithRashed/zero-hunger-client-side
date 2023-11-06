import PropTypes from 'prop-types';
import { useContext } from "react"
import { GlobalDataContext } from "../ContextApi/DataContext";
import { Navigate, useLocation } from "react-router-dom"
import { Spinner } from 'flowbite-react';

const PrivateRoute = ({children}) => {
 const {activeUser, loading} = useContext(GlobalDataContext)
 const location = useLocation()

 
if(loading){
   return <Spinner  className="loading loading-dots flex justify-center items-center mx-auto h-[90vh]  loading-lg" aria-label="Extra large spinner example" size="xl" />
}

 if(activeUser){
    return children
 }
    return <Navigate state={location.pathname}  to="/login"></Navigate>
 

 
}

PrivateRoute.propTypes = {
   children: PropTypes.node,
}

export default PrivateRoute
