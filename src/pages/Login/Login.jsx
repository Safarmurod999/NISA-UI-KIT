import React from "react";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "../../service/axios.service";
import Toaster from "../../components/Toaster/Toaster";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [data, setData] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    axios.post("auth/login", data).then((response) => {
      Toaster.notify(200, "Successfully logged in!");
      setTimeout(() => navigate("/"), 1000);
      localStorage.setItem("accessToken", response["token"]);
      localStorage.setItem("user", JSON.stringify(response["username"]));
    }).catch((error) => { Toaster.notify(404, error.message);});

  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <section className="login">
      <div className="login__wrapper">
        <p className="login__suptitle">LOGIN</p>
        <div className="login__title">Login to your account</div>

        <form className="login__form" noValidate onSubmit={handleSubmit}>
          <div className="login__controller">
            <label htmlFor="username" className="login__label">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className="login__input"
              placeholder="username"
              value={data.username}
              onChange={handleChange}
            />
            <label htmlFor="password" className="login__label">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="login__input"
              placeholder="Password"
              value={data.password}
              onChange={handleChange}
            />
            <Link to={"/reset"} className="login__link">
              Forgot Password?
            </Link>
            <button type="submit" className="login__submit">
              Login
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
}

export default Login;
