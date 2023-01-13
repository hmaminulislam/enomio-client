import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import About from "../pages/about/About";
import Home from "../pages/home/Home";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            }
        ]
    }
])

export default router;