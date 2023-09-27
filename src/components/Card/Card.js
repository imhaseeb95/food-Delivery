import { Link } from "react-router-dom";
import Rating from "../../components/Rating/Rating";
import "./card.css";

const Card = ({ product }) => {
  return (
    <>
      <div className="product-cards">
        <div className="product-cards-image">
          {/* <Link to={`/product/${product._id}`} className="prdt-image">
            <img src={product.image} alt={product.name} />
          </Link> */}
        </div>
        <div className="product-cards-price">
          <Link to={`/product/${product._id}`} className="btn-details">
            <div>
              <strong>{product.name}</strong>
            </div>
          </Link>
        </div>
        <div className="product-cards-rating">
          <Rating value={product.rating} text={`${product.reviews} reviews`} />
        </div>
        <div className="hm-productlist-disc">{product.desc}</div>
      </div>
    </>
  );
};

export default Card;
