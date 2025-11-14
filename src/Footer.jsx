import React from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin  } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-black text-white mt-auto py-5">
      <div className="container">
        <div className="row text-center text-md-start">
          {/* Exclusive */}
          <div className="col-md-2 mb-4">
            <h5 className="fw-bold mb-3">Exclusive</h5>
            <ul className="list-unstyled">
              <li>Subscribe</li>
              <li>Get 10% off your first order</li>
              <input className="bg-black" type="text" placeholder="Enter your Email" />
            </ul>
          </div>

          {/* Support */}
          <div className="col-md-2 mb-4">
            <h5 className="fw-bold mb-3">Support</h5>
            <ul className="list-unstyled">
              <li>Maju-Karahi</li>
              <li>Contact 000 000000</li>
              <li>Email abc@maju </li>
            </ul>
          </div>

          {/* Accounts */}
          <div className="col-md-2 mb-4">
            <h5 className="fw-bold mb-3">Accounts</h5>
            <ul className="list-unstyled">
              <li>Log In </li>
              <li>My Account</li>
              <li>Log In/Register</li>
              <li>Cart</li>
              <li>Wishlist</li>
              <li>Shop</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 mb-4">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li>Privacy Policy</li>
              <li>Term of Use</li>
              <li>FAQ</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Download App */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3">Download App</h5>
            <p>Save $3 with App New User Only</p>
            <div className="d-flex justify-content-center justify-content-md-start gap-2 mb-3">
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
            {/* Social Icons - Google Play aur App Store ke neeche white color me */}
            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              <FaInstagram size={24} color="white" />
              <FaFacebook size={24} color="white" />
              <FaTwitter size={24} color="white" />
              <FaLinkedin size={24} color="white" />
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