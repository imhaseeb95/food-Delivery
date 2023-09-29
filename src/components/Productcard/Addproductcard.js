import { useEffect, useState } from "react";
import "./Addproductcard";
import axios from "axios";

function Addproduct() {
  // const [test, setTest] = useState();
  const [categoryGet, setCategoryGet] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/category/getAllCategories")
      .then((res) => setCategoryGet(res.data.result))
      .catch((err) => console.error(err));
  }, []);

  const [productData, setProductData] = useState({
    name: "",
    image: "",
    brand: "",
    desc: "",
    reviews: "",
    rating: "",
    price: "",
    category_id: "",
    countInStock: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setProductData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/product/create-product", productData)
      .then((res) => console.log(res.status))
      .catch((err) => console.error(err));
  };
  console.log(productData);
  return (
    <>
      <div className="prouct-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <select
              name="category_id"
              value={productData.category_id}
              onChange={handleOnChange}
            >
              <option>Select Category</option>
              {categoryGet.map((item) => (
                <option key={item._id} value={item._id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label className="labels">Name</label>
            <input
              type="text"
              name="name"
              value={productData.name}
              className="form-control"
              onChange={handleOnChange}
            />
          </div>
          <div className="form-group">
            <label className="labels">image</label>
            <input
              type="text"
              className="form-image"
              name="image"
              value={productData.imgae}
              onChange={handleOnChange}
            />
          </div>
          <div className="form-group">
            <label className="labels">Brand</label>
            <input
              type="text"
              className="product-brand"
              name="brand"
              value={productData.brand}
              onChange={handleOnChange}
            />
          </div>
          <div className="form-group">
            <label className="labels">Description</label>
            <input
              type="text"
              className="product-desc"
              name="desc"
              value={productData.desc}
              onChange={handleOnChange}
            />
          </div>
          <div className="form-group">
            <label className="labels">Review</label>
            <input
              type="text"
              className="product-review"
              name="reviews"
              value={productData.reviews}
              onChange={handleOnChange}
            />
          </div>
          <div className="form-group">
            <label className="labels">Ratings</label>
            <input
              type="text"
              className="product-review"
              name="rating"
              value={productData.rating}
              onChange={handleOnChange}
            />
          </div>
          <div className="form-group">
            <label className="labels">Price</label>
            <input
              type="text"
              className="product-review"
              name="price"
              value={productData.price}
              onChange={handleOnChange}
            />
          </div>
          <div className="form-group">
            <label className="labels">Stock</label>
            <input
              type="text"
              className="product-review"
              name="countInStock"
              value={productData.countInStock}
              onChange={handleOnChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Addproduct;
