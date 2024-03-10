import { createBrowserRouter } from "react-router-dom";
import Error404 from "../components/pages/Error404";
import Products from "../components/pages/Products";
import App from "../components/templates/App";
import Home from "../components/pages/Home";

const router = createBrowserRouter([
    {
        path:"/",
        element: <App></App>,
        errorElement: <Error404></Error404>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path:"/products",
                element:<Products></Products>,
            }
        ]
    },
])

export default router