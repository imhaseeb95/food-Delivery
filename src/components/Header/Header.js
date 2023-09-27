import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineUserCircle } from "react-icons/hi";
import { FaShoppingCart } from "react-icons/fa";
import "./header.css";

function Header() {
  const [showMenue, setShowMenue] = useState(false);
  const [bookItem, setBookItem] = useState(false);
  const getItem = window.localStorage.getItem("token");
  const navigate = useNavigate();
  // console.log(getItem);
  useEffect(() => {
    if (getItem) {
      setBookItem(true);
    } else {
      setBookItem(false);
    }
  }, [getItem]);

  const handleShowManue = () => {
    setShowMenue((preve) => !preve);
  };
  const handleClick = () => {
    console.log("hi");
    window.localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <>
      <div className="header">
        {/* Desktop */}
        <div className="wrapper">
          <div className="header-container">
            <Link to="/">
              <div className="logo">
                <span>Daily Hunger</span>
              </div>
            </Link>
            <div className="nav-links">
              <nav>
                {/* <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/manue">Manue</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul> */}
              </nav>
              <div className="cart-icon">
                <FaShoppingCart />
                <div className="cart-number">0</div>
              </div>
              <div className="user-icon" onClick={handleShowManue}>
                <div className="user-box">
                  <HiOutlineUserCircle />
                </div>
                {showMenue && (
                  <div className="user-info">
                    {bookItem ? (
                      <div className="login" onClick={handleClick}>
                        Logout
                      </div>
                    ) : (
                      <Link to={"/login"} className="login">
                        Login
                      </Link>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
