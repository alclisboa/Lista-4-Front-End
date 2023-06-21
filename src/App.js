import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import "./App.scss"
import Register from "./pages/Register/Register";
import Wishlist from "./pages/Wishlist/Wishlist";
import Blog from "./pages/Blog/Blog";
import User from "./pages/User/User";
import Politic from "./pages/Politic/Politic";
import ReturnPolicy from "./pages/ReturnPolicy/ReturnPolicy";
import ShippingPolicy from "./pages/ShippingPolicy/ShippingPolicy";
import About from "./pages/About/About";
import SeeCart from "./pages/SeeCart/SeeCart";
import Checkout from "./pages/Checkout/Checkout";

const router = createBrowserRouter([
  {
    path: "/",
    children:[
      {
        path:"/",
        element:<Home/>
      },

      {
        path:"/register",
        element: <Register/>,
      },
      {
        path:"/login",
        element: <Login/>,
      },

      {
        path:"/products/:id",
        element: <Products />,
      },

      {
        path:"/product/:id",
        element: <Product />,
      },

      {
        path:"/wishlist",
        element: <Wishlist />,
      },

      {
        path:"/user",
        element: <User />,
      },

      {
        path:"/about",
        element: <About />,
      },

      {
        path:"/blog",
        element: <Blog />,
      },

      {
        path:"/seeCart",
        element: <SeeCart />,
      },

      {
        path:"/checkout",
        element: <Checkout />,
      },

      {
        path:"/politic",
        element: <Politic />,
      },

      {
        path:"/returnPolicy",
        element: <ReturnPolicy />,
      },

      {
        path:"/shippingPolicy",
        element: <ShippingPolicy />,
      },

    ]
  },
]);

function App() {
  return (
    <div>
     <RouterProvider router={router} />
    </div>
  );
}

export default App;