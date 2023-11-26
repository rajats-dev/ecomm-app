import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  ScrollRestoration,
} from "react-router-dom";
import productsData from "./api/Api";
import Product from "./components/Product";
import Login from "./pages/Login";
import Shop from "./pages/Shop";

const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: productsData,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/shop",
        element: <Shop />,
        loader: productsData,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

const App = function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
