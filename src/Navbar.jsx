import React from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";



export const Navbar = () => {
  return (
    <div className= "container">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Exclusive
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  contact
                </Link>
              </li>
                            <li className="nav-item">
                <Link to="/About" className="nav-link">
                  About
                </Link>
              </li>
                            <li className="nav-item">
                <Link to="/Signup" className="nav-link">
                  Sign-Up
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <div className="position-relative">
  <input
    className="form-control pe-5"
    type="search"
    placeholder="What are you looking for?"
    aria-label="Search"
  />
  <FiSearch className="position-absolute top-50 end-0 translate-middle-y me-3 text-muted" />
</div>

               
              <button className="btn" type="submit">
                  <FiHeart />
              </button>
              <button className="btn" type="submit">
                 <FiShoppingCart />
              </button>
             

            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};
