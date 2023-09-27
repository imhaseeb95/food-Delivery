import React from "react";
import { useState } from "react";
import { BiSolidUserCircle } from "react-icons/bi";
import { IoIosEyeOff, IoIosEye } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import User from "../../img/userimg.png";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: null,
    password: null,
  });
  console.log(data);
  const handleShowPassword = () => {
    setShowPassword((preve) => !preve);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  // const handleSubmit = () => {
  //   const { email, password } = data;
  //   if (email && password) {
  //     alert("Successfull");
  //   } else {
  //     alert("Please Enter Require Fields");
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/user/login", data)
      .then((res) => {
        console.log("res ", res);
        alert("Login Successfull");
        if (res.data.role === "admin") {
          localStorage.setItem("token", res.data.token);
          navigate("/dashboard");
          // alert("Logged in as Admin");
        } else {
          localStorage.setItem("token", res.data.token);
          navigate("/user");
          // alert("logged in as user");
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="app-section">
      <div className="signup-container">
        <div className="signup-form">
          <div className="signup-user">
            <img src={User} alt="userimage" />
            <label htmlFor="profile-image" className="">
              <div className="up-load-img">Upload</div>
              <input
                type={"file"}
                name=""
                id="profile-image"
                className="user-file"
              />
            </label>
          </div>

          <form>
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
            <button className="btn btn-signup" onClick={handleSubmit}>
              Login
            </button>
            <p className="login-account">
              Don't have Account ? <Link to={"/Signup"}>Signup</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
