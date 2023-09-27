import { Link } from "react-router-dom";
import "./addcategory.css";
import { AiFillHome } from "react-icons/ai";

function Addcategory() {
  return (
    <>
      <div className="addcategory-container main-dash">
        <div className="admin-side-bar">
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
            </ul>
          </div>
        </div>
        <div className="admin-content-container">
          <Link to="/dashboard">
            <AiFillHome />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Addcategory;
