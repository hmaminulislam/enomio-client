import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import About from "../../pages/about/About";
import Blog from "../../pages/blog/Blog";
import Cart from "../../pages/cart/Cart";
import Categories from "../../pages/categories/Categories";
import Category from "../../pages/categories/Category";
import Checkout from "../../pages/checkout/Checkout";
import Home from "../../pages/home/Home";
import Login from "../../pages/login/Login";
import Register from "../../pages/register/Register";
import Shop from "../../pages/shop/Shop";
import ShopDetails from "../../pages/shop/shop-details/ShopDetails";
import WishList from "../../pages/wishlist/WishList";
import PrivateRoute from "../private-route/PrivateRoute";

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
        loader: async ({ params }) =>
          await fetch(`https://enomio-server.vercel.app/shop/${params.id}`),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/category/:id",
        element: <Category />,
        loader: async ({ params }) =>
          await fetch(`https://enomio-server.vercel.app/category/${params.id}`),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/wishlist",
        element: <WishList />,
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
