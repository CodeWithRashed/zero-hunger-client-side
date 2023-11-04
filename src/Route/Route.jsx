import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Page/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: ([
       {
        path: "/",
        element: <HomePage></HomePage>
       },
       {
        path: "foods",
        element: <>Food</>
       },
       {
        path: "add",
        element: <>Add</>
       },
       {
        path: "manage",
        element: <>manage</>
       },
       
       {
        path: "request",
        element: <>request</>
       },
       {
        path: "login",
        element: <>login</>
       }
    ])
  },
]);
