import axios from "axios";
import React, { useEffect, useState } from "react";
import Dashboardlinks from "../Dashboardlinks/Dashboardlinks";

function Productlistitems() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/product/all-products")
      .then((res) => setData(res.data.result))
      .catch((err) => console.error(err));
  }, [data]);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8080/product/deleteproduct/${id}`)
      .then((res) => console.log(res.status))
      .catch((err) => console.error(err));
  };

  return (
    <>
      <div className="orders-container main-dash">
        <div className="admin-side-bar">
          <Dashboardlinks />
        </div>
        <div className="admin-content-container">
          <table style={{ width: "100%", textAlign: "left" }}>
            <thead>
              <tr>
                <th>Name</th>
                <th>image</th>
                <th>Brand</th>
                <th>Description</th>
                <th>Review</th>
                <th>Ratings</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item) => {
                return (
                  <tr key={item._id}>
                    <td>{item.name}</td>
                    <td>{item.image.map((img) => img)}</td>
                    <td>{item.brand}</td>
                    <td>{item.desc}</td>
                    <td>{item.reviews.map((rv) => rv)}</td>
                    <td>{item.rating}</td>
                    <td>{item.price}</td>
                    <td>{item.countInStock}</td>
                    <td>
                      <button>Edit</button>&nbsp; &nbsp;
                      <button onClick={() => handleDelete(item._id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Productlistitems;
