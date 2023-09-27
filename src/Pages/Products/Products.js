import React, { useEffect, useState, Suspense, lazy } from "react";
import { useParams } from "react-router-dom";
import "./products.css";
import axios from "axios";

const Details = lazy(() => import("./Details"));

const Products = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:8080/productdetails/product-details/${id}`)
      .then((res) => setData(res.data.result))
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <>
      <section className="section-product-details padding-products-detail">
        <Suspense fallback={<div>Loading...</div>}>
          <Details data={data} />
        </Suspense>
      </section>
    </>
  );
};

export default Products;
