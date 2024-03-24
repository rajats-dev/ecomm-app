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
import Navbar from "./admin/components/Navbar";
import AdminFooter from "./admin/components/AdminFooter";
import AdminHome from "./admin/pages/Home/AdminHome";
import AdminProducts from "./admin/pages/AdminProducts";
import AdminUsers from "./admin/pages/AdminUsers";
import Menu from "./admin/components/Menu";
import AdminLogin from "./admin/pages/AdminLogin";
import "./admin/style/adminGloble.scss";

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
    <div className="main">
      <Navbar />
      <div className="container">
        <div className="menuContainer">
          <Menu />
        </div>
        <ScrollRestoration />
        <div className="contentContainer">
          <Outlet />
        </div>
      </div>
      <AdminFooter />
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
        path: "/admin/home",
        element: <AdminHome />,
      },
      {
        path: "/admin/products",
        element: <AdminProducts />,
      },
      {
        path: "/admin/users",
        element: <AdminUsers />,
      },
    ],
  },
  {
    path: "/admin/login",
    element: <AdminLogin />,
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
