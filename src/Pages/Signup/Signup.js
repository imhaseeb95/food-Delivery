import React from "react";
import { useState } from "react";
import { BiSolidUserCircle } from "react-icons/bi";
import { IoIosEyeOff, IoIosEye } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import User from "../../img/userimg.png";
import { ImageBase64 } from "../../Utility/Utility";
import axios from "axios";

import "./signup.css";

function Signup() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  // const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    firstName: null,
    lastName: null,
    email: null,
    contact: null,
    password: null,
    // confirmpassword: null,
    image: null,
  });
  const handleShowPassword = () => {
    setShowPassword((preve) => !preve);
  };
  // const handleshowConfirmPassword = () => {
  //   setShowConfirmPassword((preve) => !preve);
  // };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleProfileImage = async (e) => {
    const data = await ImageBase64(e.target.files[0]);
    setData((preve) => {
      return {
        ...preve,
        image: data,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/user/createUser", data)
      .then((res) => {
        console.log(res);
        if (res.status === 201) {
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
    const { firstName, email, password, lastName, contact } = data;
    if (firstName === null) {
      alert("firstName required");
    }
    if (lastName === null) {
      alert("lastName required");
    }
    if (email === null) {
      alert("email required");
    }
    if (contact === null) {
      alert("contact required");
    }
    if (password === null) {
      alert("password required");
    }
  };

  return (
    <div className="app-section">
      <div className="signup-container">
        <div className="signup-form">
          <div className="signup-user">
            <img src={data.image ? data.image : User} alt="" />
            <label htmlFor="profile-image" className="">
              <div className="up-load-img">Upload</div>
              <input
                type={"file"}
                name=""
                id="profile-image"
                accept="image/*"
                className="user-file"
                onChange={handleProfileImage}
              />
            </label>
          </div>
          <form>
            <div className="input-box">
              <label htmlFor="firstName">First Name</label>
              <input
                type={"text"}
                id="firstName"
                name="firstName"
                className="input-field"
                value={data.firstName}
                onChange={handleOnChange}
              />
            </div>
            <div className="input-box">
              <label htmlFor="lastName">Last Name</label>
              <input
                type={"text"}
                id="lastName"
                name="lastName"
                className="input-field"
                value={data.lastName}
                onChange={handleOnChange}
              />
            </div>
            <div className="input-box">
              <label htmlFor="email">Email</label>
              <input
                type={"email"}
                id="email"
                name="email"
                className="input-field"
                value={data.email}
                onChange={handleOnChange}
              />
            </div>
            <div className="input-box">
              <label htmlFor="contact">contact</label>
              <input
                type={"text"}
                id="contact"
                name="contact"
                className="input-field"
                value={data.contact}
                onChange={handleOnChange}
              />
            </div>
            <div className="input-box">
              <label htmlFor="password">Password</label>
              <div className="password-input">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  className="input-field"
                  value={data.password}
                  onChange={handleOnChange}
                />
                <div className="password-icons" onClick={handleShowPassword}>
                  {showPassword ? <IoIosEye /> : <IoIosEyeOff />}
                </div>
              </div>
            </div>
            {/* <div className="input-box">
              <label htmlFor="confirmpassword">Confirm Password</label>
              <div className="password-input">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmpassword"
                  name="confirmpassword"
                  className="input-field"
                  value={data.confirmpassword}
                  onChange={handleOnChange}
                />
                <div
                  className="password-icons"
                  onClick={handleshowConfirmPassword}
                >
                  {showConfirmPassword ? <IoIosEye /> : <IoIosEyeOff />}
                </div>
              </div>
            </div> */}
            <button className="btn btn-signup" onClick={handleSubmit}>
              Signup
            </button>
            <p className="login-account">
              Already have Account ? <Link to={"/login"}>Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
