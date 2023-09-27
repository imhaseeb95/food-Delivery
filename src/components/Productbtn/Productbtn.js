import { useState } from "react";
// import menueitems from "../../menueitems";
import "./productbtn.css";

const Productlsit = ({ filterItems, test, active }) => {
  return (
    <>
      {
        <div className="menu-tabs container">
          <div className="tabs-container">
            {/* <button className="btn-tabs" onClick={() => setItems(menueitems)}>
              All
            </button> */}
            {test.map((item, index) => (
              <button
                key={index}
                className={`btn-tabs ${active === item ? "active" : ""}`}
                onClick={() => filterItems(`${item}`)}
              >
                {item}
              </button>
            ))}
            {/* <button className="btn-tabs" onClick={() => filterItems("Pizza")}>
              Pizza
            </button>
            <button className="btn-tabs" onClick={() => filterItems("Burger")}>
              Burger
            </button>
            <button className="btn-tabs" onClick={() => filterItems("Snack")}>
              Snack
            </button>
            <button className="btn-tabs" onClick={() => filterItems("Shake")}>
              Shake
            </button>
            <button className="btn-tabs" onClick={() => filterItems("Dessert")}>
              Dessert
            </button>
            <button className="btn-tabs" onClick={() => filterItems("Offers")}>
              Offers
            </button> */}
          </div>
        </div>
      }
    </>
  );
};

export default Productlsit;
