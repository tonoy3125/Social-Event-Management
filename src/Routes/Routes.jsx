import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import ErrorElement from "../Layout/ErrorElement";
import ServicesDetails from "../Pages/Services/ServicesDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Gallery from "../Pages/Gallery/Gallery";
import PrivateRoute from "./PrivateRoute";
import Booking from "../Pages/Booking/Booking";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('../service.json')
            },
            {
                path: "/events/:id",
                element: <PrivateRoute><ServicesDetails></ServicesDetails></PrivateRoute>,
                loader: () => fetch('../service.json')
            },
            {
                path: "/gallery",
                element: <PrivateRoute><Gallery></Gallery></PrivateRoute>
            },
            {
                path: "/booking",
                element: <PrivateRoute><Booking></Booking></PrivateRoute>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
        ]
    },
]);

export default router;