import React, { useState } from "react";
import Menuelist from "../../components/Menuelist/Menuelist";
import Productbtn from "../../components/Productbtn/Productbtn";
import menueitems from "../../menueitems";
import "./menueprdt.css";

const FilterMap = menueitems.map((item) => {
  return item.category;
});

function Menueprdt({ bookItem }) {
  const [items, setItems] = useState(menueitems);
  const [active, setActive] = useState(null);
  const filterItems = (cateItems) => {
    setActive(cateItems);
    if (cateItems === "All") {
      setItems(menueitems);
      return;
    }
    const updateItems = menueitems.filter((curelem) => {
      return curelem.category === cateItems;
    });
    setItems(updateItems);
    //console.log(updateItems);
  };
  const test = ["All", ...new Set(FilterMap)];
  //console.log(test);
  return (
    <>
      <div className="wrapper">
        <div className="hm-product-btns">
          <Productbtn filterItems={filterItems} test={test} active={active} />
        </div>
        <div>
          <Menuelist items={items} bookItem={bookItem} />
        </div>
      </div>
    </>
  );
}

export default Menueprdt;
