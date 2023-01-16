import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import About from "../pages/about/About";
import Blog from "../pages/blog/Blog";
import Cart from "../pages/cart/Cart";
import Categories from "../pages/categories/Categories";
import Category from "../pages/categories/Category";
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
        loader: async ({ params }) =>
          await fetch(`http://localhost:5000/shop/${params.id}`),
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
          await fetch(`http://localhost:5000/category/${params.id}`),
      },
    ],
  },
]);

export default router;