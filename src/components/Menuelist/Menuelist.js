import "./menuelist.css";
import { useState } from "react";

import Modal from "../Modal/Modal";
import { Link } from "react-router-dom";

const Menuelist = ({ items, menuelist, bookItem }) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div className="hm-products">
        {items.map((menuelist) => {
          const { id, name, image, description, price } = menuelist;

          return (
            <>
              <div className="hm-productlist-container" key={id}>
                <div className="hm-productlist-image">
                  <img src={image} alt={image} />
                </div>
                <div className="hm-productlist-title">
                  <h3>{name}</h3>
                </div>
                <div className="hm-productlist-disc">
                  <p>{description}</p>
                </div>
                <div className="hm-productlist-price">
                  <p>Rs {price}</p>
                  {bookItem ? (
                    <Link to="/user" className="btn-product">
                      Order now
                    </Link>
                  ) : (
                    <button
                      className="btn-product"
                      onClick={() => setOpenModal(true)}
                    >
                      Order now
                    </button>
                  )}
                  {/* <button
                    onClick={() => setOpenModal(true)}
                    className="btn-product"
                  >
                    Order now
                  </button> */}
                </div>
              </div>
            </>
          );
        })}
      </div>
      <Modal open={openModal} close={() => setOpenModal(false)} />
    </>
  );
};

export default Menuelist;
