import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import Userscard from "../../components/Userscard/Userscard";
import "./dashboard.css";
import Dashboardlinks from "../../components/Dashboardlinks/Dashboardlinks";
function Dashboard() {
  return (
    <>
      <div className="dashbard-container main-dash">
        <div className="admin-side-bar">
          <Dashboardlinks />
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
