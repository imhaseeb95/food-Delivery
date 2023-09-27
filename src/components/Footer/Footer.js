import { Link } from "react-router-dom";
import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="wrapper">
          <div className="footer-container">
            <div className="company-social-links">
              <div className="ft-logo">
                <Link to="/">Dialy Hunger</Link>
              </div>
              <ul>
                <li>
                  <Link to="/">
                    <ImFacebook />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <BsTwitter />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <BsInstagram />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-info">
              <h3>Contact Info</h3>
              <ul>
                <li>
                  <Link to="/">(406) 555-0120</Link>
                </li>
                <li>
                  <Link to="/">(480) 555-0103</Link>
                </li>
              </ul>
            </div>
            <div className="footer-info">
              <h3>Opening Hour</h3>
              <ul>
                <li className="days">Monday- Saturday</li>
                <li className="timings">8 AM – 5 PM</li>
                <li className="days">Sunday</li>
                <li className="timings">12 AM – 8 PM</li>
              </ul>
            </div>
            <div className="footer-info news">
              <h3>Newsletters</h3>
              <div className="subscribe">
                <input
                  type="email"
                  placeholder="Email"
                  className="subscribe-email"
                />
                <button type="submit" className="btn-subscribe">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
