import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import RegPage from "./pages/RegPage";
import CarsPage from "./pages/CarsPage";
import MainLayout from "./layout/MainLayout";



const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);



let router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <h1>aaaaaaaa errorrr!</h1>,
        children: [
            {
                index: true, element: <AuthPage/>
            },
            {
                path: '/registration', element: <RegPage/>
            },
            {
                path:'/cars', element:<CarsPage/>
            }
        ]

    }
]);
root.render(
    <RouterProvider router={router}/>
);
