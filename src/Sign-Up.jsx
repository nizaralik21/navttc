import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6 d-none d-md-block p-0">
          <img 
            src="/Images/Log-In.png" 
            alt="Sign Up" 
            className="img-fluid w-100 h-100"
            style={{objectFit: 'cover'}}
          />
        </div>

        <div className="col-md-5 offset-md-1 d-flex align-items-center justify-content-center py-5">
          <div className="w-75">
            <h1 className="text-center mb-2 fw-bold">Create Account</h1>
            <p className="text-center text-muted mb-4">Enter Your Details Below</p>
            
            <form>
              <div className="mb-3">
                <input 
                  type="text" 
                  className="form-control form-control-lg border-0 border-bottom rounded-0" 
                  id="Name"
                  placeholder="Name"
                />
              </div>

              <div className="mb-3">
                <input 
                  type="email" 
                  className="form-control form-control-lg border-0 border-bottom rounded-0" 
                  id="email"
                  placeholder="Email or phone number"
                />
              </div>

              <div className="mb-3">
                <input 
                  type="password" 
                  className="form-control form-control-lg border-0 border-bottom rounded-0" 
                  id="password"
                  placeholder="Enter your password"
                />
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