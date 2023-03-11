import Landing from "./Landing";


import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Landing/>,
        }
    ]
);

const Router = () => {
    return(
        <RouterProvider router={router}/>
    )
};

export default Router;