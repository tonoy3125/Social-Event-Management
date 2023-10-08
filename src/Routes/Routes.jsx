import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import ErrorElement from "../Layout/ErrorElement";
import ServicesDetails from "../Pages/Services/ServicesDetails";



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
                element: <ServicesDetails></ServicesDetails>,
                loader: () => fetch('../service.json')
            },
        ]
    },
]);

export default router;