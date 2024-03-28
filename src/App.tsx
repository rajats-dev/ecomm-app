import { Suspense, useEffect } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
// import Cart from "./pages/Cart";
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
import { authAction } from "./features/authSlice/authSlice";
import { useDispatch } from "react-redux";
import getCartDataRetrive from "./store/reducers/getCardDataRetrive";
import { lazy } from "react";
import Dashboard from "./admin/pages/main/Dashboard";
import Products from "./admin/pages/main/Products";
import Customers from "./admin/pages/main/Customers";
import Transaction from "./admin/pages/main/Transaction";
import AdminSlider from "./admin/components/AdminSlider";

const Cart = lazy(() => import("./pages/Cart"));

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

const AdminLayout = () => {
  return (
    <div className="adminContainer">
      <AdminSlider />
      <ScrollRestoration />
      <div className="childContainer">
        <Outlet />
      </div>
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
        element: (
          <Suspense fallback={"...loading"}>
            <Cart />
          </Suspense>
        ),
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
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "/admin/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/admin/product",
        element: <Products />,
      },
      {
        path: "/admin/customer",
        element: <Customers />,
      },
      {
        path: "/admin/transaction",
        element: <Transaction />,
      },
    ],
  },
]);

const App = function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const obj = localStorage.getItem("obj");
    const objParsed = JSON.parse(obj);
    dispatch(authAction.addUser(objParsed));
    dispatch(getCartDataRetrive());
  }, [dispatch]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
