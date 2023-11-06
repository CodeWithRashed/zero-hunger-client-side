import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Pages/HomePage";
import AuthPage from "../Pages/AuthPage";
import Error404 from '../Pages/Error404';
import AddFood from "../Pages/AddFood";
import FoodDetails from "../Pages/FoodDetails";
import ManageFood from "../Pages/ManageFood";
import AvailableFoodsPage from "../Pages/AvailableFoodsPage";
import PrivateRoute from '../Router/PrivateRoute'
import RequestPage from "../Pages/RequestPage";
import UpdateFood from "../Pages/UpdateFood";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error404></Error404>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/foods",
        element: <AvailableFoodsPage></AvailableFoodsPage>,
      },
      {
        path: "/add",
        element: <PrivateRoute><AddFood></AddFood></PrivateRoute>,
      },
      {
        path: "/manage",
        element: <PrivateRoute><ManageFood></ManageFood></PrivateRoute>
      },
      {
        path: "/request",
        element: <PrivateRoute><RequestPage></RequestPage></PrivateRoute>,
        loader: () => fetch(`${import.meta.env.VITE_BACKEND_API}/api/getCartItems`)
      },
       
      {
        path: "/login",
        element: <AuthPage></AuthPage>,
      },
      {
        path: "/food/:id",
        element: <PrivateRoute><FoodDetails></FoodDetails></PrivateRoute>,
        loader: ({params})=> fetch(`${import.meta.env.VITE_BACKEND_API}/api/v1/user/get/food/${params.id}`)
      },
      {
        path: "/food/update/:id",
        element: <PrivateRoute><UpdateFood></UpdateFood></PrivateRoute>,
        loader: ({params})=> fetch(`${import.meta.env.VITE_BACKEND_API}/api/v1/user/get/food/${params.id}`)
      }
    
    ],
  },
]);
