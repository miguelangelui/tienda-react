import { createBrowserRouter } from "react-router-dom";
import Error404 from "../components/pages/Error404";
import Products from "../components/pages/Products";
import App from "../components/templates/App";
import Home from "../components/pages/Home";
import Login from "../components/pages/Login";
import Registro from "../components/pages/Registro";

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
    {
        path:"/login",
        element:<Login></Login>
    },
    {
        path:"/registro",
        element:<Registro></Registro>
    }
])

export default router