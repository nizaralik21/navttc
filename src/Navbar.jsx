import React from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiShoppingCart, FiHeart } from "react-icons/fi";

export const Navbar = () => {
  return (
    <div className="container py-3">
      <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
        <div className="container-fluid">
          {/* Brand */}
          <Link className="navbar-brand fw-bold fs-3" to="/">
            Exclusive
          </Link>

          {/* Mobile Toggle */}
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

          {/* Collapsible Content */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Navigation Links */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Signup" className="nav-link">
                  Sign Up
                </Link>
              </li>
            </ul>

            {/* Search and Icons */}
            <div className="d-flex align-items-center flex-column flex-lg-row w-50 w-lg-auto">
              {/* Search Bar */}
              <div className="position-relative me-lg-3 mb-2 mb-lg-0 w-100 w-lg-auto">
                <input
                  className="form-control pe-5"
                  type="search"
                  placeholder="What are you looking for?"
                  aria-label="Search"
                />
                <FiSearch className="position-absolute top-50 end-0 translate-middle-y me-3 text-muted" />
              </div>

              {/* Icons */}
              <div className="d-flex">
                <button className="btn btn-outline-secondary me-2">
                  <FiHeart size={18} />
                </button>
                <Link to="/cart" className="btn btn-outline-secondary">
                  <FiShoppingCart size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
