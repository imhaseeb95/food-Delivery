import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import Userscard from "../../components/Userscard/Userscard";
import "./dashboard.css";
function Dashboard() {
  return (
    <>
      <div className="dashbard-container main-dash">
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
          <div>
            <Link to="/dashboard">
              <AiFillHome />
            </Link>
          </div>
          <div className="users-mian-card">
            <Userscard />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
