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
import UpdateToy from "../Pages/UpdateToy/UpdateToy";
import Blogs from "../Pages/Blogs/Blogs";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/alltoys',
                element: <AllToys></AllToys>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/addtoy',
                element: <PrivetRoute><AddToy></AddToy></PrivetRoute>
            },
            {
                path: '/mytoys',
                element: <PrivetRoute><MyToys></MyToys></PrivetRoute>
            },
            {
                path: '/updatetoy/:id',
                element: <UpdateToy></UpdateToy>,
                loader: ({ params }) => fetch(`https://baby-toys-marketplace-server.vercel.app/toysById/${params.id}`)
            },

            {
                path: '/toysdetails/:id',
                element: <PrivetRoute><ToysDetails></ToysDetails></PrivetRoute>,
                loader:({ params }) => fetch(`https://baby-toys-marketplace-server.vercel.app/toysById/${params.id}`)

            },

            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }

        ]
    }
])


export default router;