import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Register from "../pages/register/Register";
import Login from "../pages/Login/Login";
import Account from "../layout/Account";
import AccountHome from "../components/account/AccountHome";
import Order from "../components/account/Order";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/account',
                element: <Account />,
                children: [
                    {
                        path: '/account',
                        element: <AccountHome />
                    },
                    {
                        path: '/account/order',
                        element: <Order />
                    }
                ]
            }
        ]
    }
])