import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Register from "../pages/register/Register";
import Login from "../pages/Login/Login";
import Account from "../layout/Account";
import AccountHome from "../components/account/AccountHome";
import Order from "../components/account/Order";
import EditProfile from "../components/account/EditProfile";
import Password from "../components/account/Password";
import SavedList from "../components/account/SavedList";
import SavedPc from "../components/account/SavedPc";
import StarPoints from "../components/account/StarPoints";
import StoreCredit from "../components/account/StoreCredit";
import Address from "../components/account/Address";

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
                    },
                    {
                        path: '/account/edit-profile',
                        element: <EditProfile/>
                    },
                    {
                        path: '/account/address',
                        element: <Address/>
                    },
                    {
                        path: '/account/change-password',
                        element: <Password/>
                    },
                    {
                        path: '/account/savelist',
                        element: <SavedList/>
                    },
                    {
                        path: '/account/savepc',
                        element: <SavedPc/>
                    },
                    {
                        path: '/account/starpoints',
                        element: <StarPoints/>
                    },
                    {
                        path: '/account/store-credit',
                        element: <StoreCredit/>
                    }
                ]
            }
        ]
    }
])