import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import About from "../pages/about/About";
import Cart from "../pages/cart/Cart";
import Home from "../pages/home/Home";
import Shop from "../pages/shop/Shop";
import ShopDetails from "../pages/shop/shop-details/ShopDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/shop/:id",
        element: <ShopDetails />,
        loader: async ({ params }) => await fetch(`http://localhost:5000/shop/${params.id}`),
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ],
  },
]);

export default router;