import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";

function Addcategorycard({ edit }) {
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
  console.log(edit);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setCategory((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/category/create", category)
      .then((res) => {
        console.log(typeof res.status);
        if (res.status === 201) {
          setCategory({
            name: "",
            desc: "",
          });
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="prouct-form">
        <Link to="/dashboard">
          <AiFillHome />
        </Link>
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
          <button type="submit">Submit</button>
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

export default Addcategorycard;
