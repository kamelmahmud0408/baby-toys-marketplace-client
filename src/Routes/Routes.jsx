import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import AllToys from "../Pages/AllToys/AllToys";
import AddToy from "../Pages/AddToy/AddToy";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivetRoute from "./PrivetRoute";
import MyToys from "../Pages/MyToys/MyToys";
import ToysDetails from "../Pages/ToysDetails/ToysDetails";

const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/alltoys',
                element:<AllToys></AllToys>
            },
            {
                path:'/addtoy',
                element:<PrivetRoute><AddToy></AddToy></PrivetRoute>
            },
            {
                path:'/mytoys',
                element:<PrivetRoute><MyToys></MyToys></PrivetRoute>
            },
            {
                path:'/toysdetails/:id',
                element:<PrivetRoute><ToysDetails></ToysDetails></PrivetRoute>
            },
            
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            }
            
        ]
    }
])


export default router;