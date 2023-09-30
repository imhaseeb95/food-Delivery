import React from "react";
import { Link } from "react-router-dom";

function Dashboardlinks() {
  return (
    <>
      <div className="admin-link">
        <ul>
          <li>
            <Link to="/dashboard" className="">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/orders" className="">
              Order
            </Link>
          </li>
          <li>
            <Link to="/addproduct" className="">
              Add Product
            </Link>
          </li>
          <li>
            <Link to="/addcategory" className="">
              Add Category
            </Link>
          </li>
          <li>
            <Link to="/productlist" className="">
              Productlist
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Dashboardlinks;
