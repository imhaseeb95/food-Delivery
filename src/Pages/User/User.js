import Card from "../../components/Card/Card";
import "./user.css";
import { useState, useEffect } from "react";
import axios from "axios";

const User = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // fetch("http://localhost:8080/product/all-products")
    //   .then((res) => res.json())
    //   .then((res) => setData(res.result))
    //   .catch((err) => console.error(err));
    axios
      .get("http://localhost:8080/product/all-products")
      .then((res) => setData(res.data.result))
      .catch((err) => console.error(err));
  }, [data]);
  // console.log(data);
  return (
    <>
      <section className="padding-products-detail">
        <div className="wrapper">
          <div className="card-container">
            <h1>Products Ready To Deliver</h1>
            <div className="card-items">
              {data.map((product) => {
                return (
                  <div key={product._id}>
                    <Card product={product} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default User;
