import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Editcategories({ edit, setIsActive }) {
  const [category, setCategory] = useState({
    name: "",
    desc: "",
  });

  useEffect(() => {
    if (edit?.edit === true) {
      setCategory({
        name: edit?.item?.name,
        desc: edit?.item?.desc,
      });
    } else {
      setCategory({
        name: "",
        desc: "",
      });
    }
  }, [edit?.edit, edit?.item?.desc, edit?.item?.name]);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setCategory((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const { id } = edit;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .patch(`http://localhost:8080/category/updatecategory/${id}`, category)
      .then((res) => {
        if (res.status === 200) {
          setCategory({
            name: "",
            desc: "",
          });
          setIsActive(false);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="prouct-form">
        <Link to="/addcategory">Add category</Link>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="labels">Ctegory Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={category.name}
              onChange={handleOnChange}
            />
          </div>
          <div className="form-group">
            <label className="labels">Description</label>
            <input
              type="text"
              className="form-image"
              name="desc"
              value={category.desc}
              onChange={handleOnChange}
            />
          </div>
          <button type="submit">Save Changes</button>
          <br />
          <br />

          <hr />
          <br />
          <br />
        </form>
      </div>
    </>
  );
}

export default Editcategories;
