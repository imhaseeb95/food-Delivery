import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Menuecard from "../../components/Menuecard/Menuecard";
import Menueprdt from "../../components/Menueprdt/Menueprdt";
import bannerimage from "../../img/banner-burger.webp";
import burgerbgone from "../../img/burgerbg1.svg";
import burgerbgtwo from "../../img/burgerbg2.svg";
import servivce from "../../img/banner-burger.webp";
import star from "../../img/disctstart.png";
import usp from "../../img/uspimg.webp";
import Burger from "../../burgers";
import Modal from "../../components/Modal/Modal";
import "./home.css";

function Home() {
  const [openModal, setOpenModal] = useState(false);
  const [bookItem, setBookItem] = useState(false);

  const getItem = window.localStorage.getItem("token");
  // console.log(getItem);
  useEffect(() => {
    if (getItem) {
      setBookItem(true);
    } else {
      setBookItem(false);
    }
  }, [getItem]);

  return (
    <>
      {/* Setion Hero */}
      <section className=" hero padding-hero">
        <div className="wrapper">
          <div className="hero-container">
            <div className="left">
              <h1>
                We will deliver<span className="text-color"> the best </span>
                Food
              </h1>
              <p className="left-papra">
                Daily Hunger delivery is a quick and convenient service that has
                become increasingly popular in recent years. With the rise of
                on-demand delivery apps, it is now easier than ever to get your
                favorite fast food delivered right to your doorstep.
              </p>
              <div>
                {bookItem ? (
                  <Link to="/user" className="btn-order">
                    ORDER NOW
                  </Link>
                ) : (
                  <button
                    className="btn-order"
                    onClick={() => setOpenModal(true)}
                  >
                    ORDER NOW
                  </button>
                )}
                {/* <button
                  className="btn-order"
                  onClick={() => setOpenModal(true)}
                >
                  ORDER NOW
                </button> */}
                <Modal open={openModal} close={() => setOpenModal(false)} />
              </div>
            </div>
            <div className="right">
              <div>
                <div className="banner-image">
                  <img
                    src={bannerimage}
                    alt={bannerimage}
                    className="burger-img"
                  />

                  <img
                    src={burgerbgone}
                    alt={burgerbgone}
                    className="burger-bg-1"
                  />

                  <img
                    src={burgerbgtwo}
                    alt={burgerbgtwo}
                    className="burger-bg-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Menue */}
      <section className="menue section-padding-bottom">
        <div className="wrapper">
          <div className="menu-content">
            <h2 className="main-heading">Choose & Enjoy</h2>
            <p>Inspired by recipes and creations of world’s best chefs</p>
          </div>
          <div className="Menue-card-hm">
            {Burger.map((burger) => {
              return <Menuecard burger={burger} bookItem={bookItem} />;
            })}
          </div>
        </div>
      </section>
      <div />
      {/* All Products */}
      <section className="products-list section-padding-bottom">
        <div className="wrapper">
          <div className="main-heading">
            <h2>Menue</h2>
          </div>
          <div>
            <Menueprdt bookItem={bookItem} />
          </div>
        </div>
      </section>
      {/* Our Services */}
      <section className="service section-padding-bottom">
        {/* <div className="srvive-content">
          <h2 className="main-heading">our services</h2>
        </div> */}
        <div className="srvc-bg-image section">
          <div className="wrapper">
            <div className="grid-two-column">
              <div className="left">
                <div className="srvc-content-left">
                  <h3>From Our Chef With Love</h3>
                  <p>
                    With a wide range of options to choose from, including
                    burgers, pizzas, sandwiches, and more, fast food services
                    offer something for everyone. Whether you're in a rush to
                    get to work or simply don't feel like cooking, fast food
                    services provide a convenient solution.
                  </p>
                </div>
              </div>
              <div className="right">
                <div className="srvc-img-container">
                  <img src={servivce} alt={servivce} />
                  <div className="discont">
                    <img src={star} alt={star} />
                  </div>
                  <div className="discount-content">from Rs 599.99</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Usp section */}
      <section className="popular-products section-padding-bottom">
        <div className="wrapper">
          <div className="grid-two-column ">
            <div className="left">
              <div className="product-usp-img">
                <img src={usp} alt={usp} />
              </div>
            </div>
            <div className="right">
              <div className="product-usp-content">
                <h2 className="main-heading">
                  We Guarantee, 30 Minutes Delivery
                </h2>
                <p className="usp-content">
                  Fastos delivery is a quick and convenient service that has
                  become increasingly popular in recent years. With the rise of
                  on-demand delivery apps, it is now easier than ever to get
                  your favorite fast food delivered right to your doorstep.
                </p>
                <div>
                  {bookItem ? (
                    <Link to="/user" className="btn-order">
                      ORDER NOW
                    </Link>
                  ) : (
                    <button
                      className="btn-order"
                      onClick={() => setOpenModal(true)}
                    >
                      ORDER NOW
                    </button>
                  )}
                  {/* <button
                    className="btn-order"
                    onClick={() => setOpenModal(true)}
                  >
                    ORDER NOW
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      ,
    </>
  );
}

export default Home;
