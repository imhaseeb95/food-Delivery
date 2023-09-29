import { Link } from "react-router-dom";
import Addcategorycard from "../../components/Addcategorycard/Addcategorycard";
import "./addcategory.css";
import Listcategory from "../../components/Listategory/Listcategory";
import { useState } from "react";

function Addcategory() {
  const [edit, setEdit] = useState("");
  function getData(proid, items) {
    setEdit({ id: proid, item: items, edit: true });
  }

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
          <Addcategorycard edit={edit} />
          <Listcategory getData={getData} />
        </div>
      </div>
    </>
  );
}

export default Addcategory;
