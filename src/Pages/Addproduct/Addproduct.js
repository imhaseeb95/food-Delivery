import Addproductcard from "../../components/Productcard/Addproductcard";
import "./addproduct.css";
import Dashboardlinks from "../../components/Dashboardlinks/Dashboardlinks";
import EditProductData from "../../components/EditProductData/EditProductData";

function Addproduct() {
  return (
    <>
      <div className="addproduct-container main-dash">
        <div className="admin-side-bar">
          <Dashboardlinks />
        </div>
        <div className="admin-content-container">
          <Addproductcard />
          <EditProductData />
        </div>
      </div>
    </>
  );
}

export default Addproduct;
