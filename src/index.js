import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Manue from "./Pages/Manue/Manue";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Login from "./Pages/Login/Login";
import Products from "./Pages/Products/Products";
import Signup from "./Pages/Signup/Signup";
// import Admin from "./Pages/Admin/Admin";
import User from "./Pages/User/User";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Orders from "./Pages/Oredrs/Orders";
import Addproduct from "./Pages/Addproduct/Addproduct";
import Addcategory from "./Pages/Addcategory/Addcategory";
import Productlistitems from "./components/Productlistitems/Productlistitems";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      {/* <Route path="/manue" element={<Manue />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} /> */}
      <Route path="/login" element={<Login />} />
      <Route path="/newproduct" element={<Products />} />
      <Route path="/signup" element={<Signup />} />
      {/* <Route path="/admin" element={<Admin />} /> */}
      <Route path="/user" element={<User />} />
      <Route path="/product/:id" element={<Products />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/addproduct" element={<Addproduct />} />
      <Route path="/addcategory" element={<Addcategory />} />
      <Route path="/productlist" element={<Productlistitems />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
