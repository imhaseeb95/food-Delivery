import { useState } from "react";
import Modal from "../Modal/Modal";
import { BiRupee } from "react-icons/bi";
import "./menucard.css";
import { Link } from "react-router-dom";

const Menuecard = ({ burger, bookItem }) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div className="food-card">
        <div className="food-image">
          <img src={burger.image} alt={burger.name} />
          <div className="food-card-price">
            <BiRupee />
            {burger.price}
          </div>
        </div>
        <div className="food-card-heading">
          <strong>{burger.name}</strong>
        </div>
        <div className="food-card-disc">{burger.description}</div>
        {bookItem ? (
          <Link to="/user" className="btn btn-buy">
            ORDER NOW
          </Link>
        ) : (
          <button className="btn btn-buy" onClick={() => setOpenModal(true)}>
            ORDER NOW
          </button>
        )}
        {/* <button onClick={() => setOpenModal(true)} className="btn btn-buy">
          Order Now
        </button> */}
      </div>
      <Modal open={openModal} close={() => setOpenModal(false)} />
    </>
  );
};

export default Menuecard;
