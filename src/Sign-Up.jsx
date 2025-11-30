import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [userData, setUserData] = useState ({
    name:"",
    email:"",
    password:"",
    usertype:""
  });
  const userhandler = (e) =>{
    setUserData({...userData, [e.target.name]:e.target.value})
  };
  const formhandler = async (e) =>{
    e.preventDefault();
    try {
      await axios.post("http://localhost:7000/api/user",userData)
      alert(`User register successfully as ${userData.usertype}`)
      setUserData({name:"", email:"", password:"", usertype:""})
    } catch (error) {
      alert("Not register try again")
    }
  };
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6 d-none d-md-block p-0">
          <img
            src="/Images/Log-In.png"
            alt="Sign Up"
            className="img-fluid w-100 h-100"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="col-md-5 offset-md-1 d-flex align-items-center justify-content-center py-5">
          <div className="w-75">
            <h1 className="text-center mb-2 fw-bold">Create Account</h1>
            <p className="text-center text-muted mb-4">
              Enter Your Details Below
            </p>

            <form onSubmit={formhandler}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control form-control-lg border-0 border-bottom rounded-0"
                  name="name"
                  id="name"
                  placeholder="Name"
                  onChange={userhandler}
                  value={userData.name}
                />
              </div>

              <div className="mb-3">
                <input
                  name="email"
                  type="email"
                  className="form-control form-control-lg border-0 border-bottom rounded-0"
                  id="email"
                  placeholder="Email or phone number"
                  onChange={userhandler}
                  value={userData.email}
                />
              </div>

              <div className="mb-3">
                <input
                  name="password"
                  type="password"
                  className="form-control form-control-lg border-0 border-bottom rounded-0"
                  id="password"
                  placeholder="Enter your password"
                  onChange={userhandler}
                  value={userData.password}
                />
              </div>
              <div className="mb-3 py-4">
                <label className="form-label required">User Type</label>
                <div className="d-flex">
                  <div className="form-check me-4">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="usertype"
                      id="customer"
                      value="customer"
                      required
                      onChange={userhandler}
                      checked={userData.usertype === "customer"}
                    />
                    <label className="form-check-label" htmlFor="customer">
                      Customer
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="usertype"
                      id="seller"
                      value="seller"
                      required
                      onChange={userhandler}
                      checked={userData.usertype === "seller"}
                    />
                    <label className="form-check-label" htmlFor="seller">
                      Seller
                    </label>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-danger btn-lg w-100 py-3 fw-bold mb-3"
              >
                Create Account
              </button>

              <button
                type="button"
                className="btn btn-outline-secondary btn-lg w-100 py-3 fw-bold"
              >
                <img
                  src="https://developers.google.com/identity/images/g-logo.png"
                  alt="Google"
                  width="20"
                  height="20"
                  className="me-2"
                />
                Sign Up with Google
              </button>
            </form>

            <div className="text-center mt-4">
              <p className="text-muted">
                Already have an account?
                <Link to="/logIn">Log In</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
