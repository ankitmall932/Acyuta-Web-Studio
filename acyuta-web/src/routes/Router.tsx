import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Route from "./Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import PageNotFound from "../pages/PageNotFound";


function Router ()
{
    const router = createBrowserRouter( [
        {
            element: <Route />,
            children: [
                {
                    path: '/',
                    element: <Home />
                },
                {
                    path: '/about',
                    element: <About />
                },
                {
                    path: '/services',
                    element: <Services />
                },
                {
                    path: '/contact',
                    element: <Contact />
                },
                {
                    path: '*',
                    element: <PageNotFound />
                }
            ]
        }
    ] );
    return (
        <div>
            <RouterProvider router={ router } />
        </div>
    );
}

export default Router;