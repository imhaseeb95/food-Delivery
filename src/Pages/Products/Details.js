import React from "react";
import { Link } from "react-router-dom";
import Rating from "../../components/Rating/Rating";

function Details({ data }) {
  return (
    <>
      <div className="wrapper">
        <div>
          <Link to="/user" className="btn-back">
            Go Back
          </Link>
        </div>
        <div className="product-details">
          <div className="left">
            <div className="product-details-image">
              <img src={data.image} alt={data.name} />
            </div>
          </div>

          <div className="middle">
            <div className="product-details-name">
              <h3>{data.name}</h3>
            </div>
            <div className="product-details-rating">
              <Rating value={data.rating} text={`${data.reviews} reviews`} />
            </div>
            <div className="product-details-price">
              <strong>Rs {data.price}</strong>
            </div>
            <div className="product-details-discription">
              <strong>Description:</strong>
              <p>{data.desc}</p>
            </div>
          </div>

          <div className="right">
            <div className="product-cart-container">
              <div className="product-cart-box">
                <ul>
                  <li>
                    <div className="product-cart-price border-bottom">
                      <p>Price</p>
                      <strong>Rs {data.price}</strong>
                    </div>
                  </li>
                  <li>
                    <div className="product-cart-price border-bottom">
                      <p>Status:</p>
                      <strong>
                        {data.countInStock > 0 ? "In Stock" : "Out of Stock"}
                      </strong>
                    </div>
                  </li>
                  <li>
                    <button className="btn-add">Add To Cart</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
