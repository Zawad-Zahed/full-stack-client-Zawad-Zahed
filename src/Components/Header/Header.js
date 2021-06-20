import React from "react";
import { Link } from "react-router-dom";
import icon from "../../imageBooks/icons8-book-64.png";

const Header = () => {
  return (
    <div className="container">
      <nav className=" flex navbar-expand-lg navbar-light bg-transparent">
        <div className="d-flex justify-content-between">
          <Link to="/home" className="navbar-brand">
            {" "}
            <img src={icon} alt="Amader Boi Ghor" />{" "}
            <h4>
              <span className="text-danger">Amader</span>{" "}
              <span className="text-primary">Boi</span>{" "}
              <span className="text-danger">Ghor</span>
            </h4>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNavAltMarkup ">
            <div className="navbar-nav ms-auto fw-bold">
              <Link to="/" className="nav-a active ml-3" aria-current="page">
                Home
              </Link>
              <Link to="/orders" className="nav-a active ml-5">
                Orders
              </Link>
              <Link to="/admin" className="nav-a active ml-5">
                Admin
              </Link>
              <Link to="/deals" className="nav-a active ml-5">
                Deals
              </Link>
              <Link to="/login" className="nav-a active ml-5 btn btn-primary ">
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div className="container-fluid m-5">
        <form action="" className="d-flex">
          <input className="form-control me-3" type="search" />
          <button className="btn btn-primary" type="submit">
            search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
