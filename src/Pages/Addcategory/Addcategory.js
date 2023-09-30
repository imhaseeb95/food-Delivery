import Addcategorycard from "../../components/Addcategorycard/Addcategorycard";
import "./addcategory.css";
import Listcategory from "../../components/Listategory/Listcategory";
import { useState } from "react";
import Editcategories from "../../components/Editcategories/Editcategories";
import Dashboardlinks from "../../components/Dashboardlinks/Dashboardlinks";

function Addcategory() {
  const [isActive, setIsActive] = useState(false);

  const [edit, setEdit] = useState("");
  function getData(proid, items) {
    setEdit({ id: proid, item: items, edit: true });
  }

  return (
    <>
      <div className="addcategory-container main-dash">
        <div className="admin-side-bar">
          <Dashboardlinks />
        </div>
        <div className="admin-content-container">
          {isActive ? (
            <Editcategories setIsActive={setIsActive} edit={edit} />
          ) : (
            <Addcategorycard />
          )}

          <Listcategory setIsActive={setIsActive} getData={getData} />
        </div>
      </div>
    </>
  );
}

export default Addcategory;
