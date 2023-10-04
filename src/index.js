import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './views/Home/Home'
import Posts from './views/Post/Post'
import ReadPost from './views/ReadPost/ReadPost'

const router = createBrowserRouter([
    {
        path:"/",
        element:<Home/>,
    },
    {
        path:"/post",
        element:<Posts/>,
    },
    {
        path:"/post/read/:id",
        element:<ReadPost/>,
    },
    
    {
        path:"*",
        element:<h1>404 Not Found</h1>,
    }

])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);