
import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-auto py-5">
      <div className="container">
        <div className="row text-center text-md-start">
          {/* Exclusive */}
          <div className="col-md-2 mb-4">
            <h5 className="fw-bold mb-3">Exclusive</h5>
            <ul className="list-unstyled">
              <li><a href="#">Get 10% off your first order</a></li>
              <li>Contact</li>
              <li>Careers</li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-md-2 mb-4">
            <h5 className="fw-bold mb-3">Support</h5>
            <ul className="list-unstyled">
              <li>Help Center</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* Accounts */}
          <div className="col-md-2 mb-4">
            <h5 className="fw-bold mb-3">Accounts</h5>
            <ul className="list-unstyled">
              <li>My Account</li>
              <li>Order Tracking</li>
              <li>Wishlist</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 mb-4">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li>Home</li>
              <li>Shop</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Download App */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3">Download App</h5>
            <p>Get our app from Play Store or App Store</p>
            <div className="d-flex justify-content-center justify-content-md-start gap-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                width="120"
              />
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                width="120"
              />
            </div>
          </div>
        </div>

        <hr className="border-secondary" />
        <p className="text-center mb-0">
          © {new Date().getFullYear()} Exclusive Store. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
