import React from "react";

const LogIn = () => {
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
            <h1 className="text-center mb-2 fw-bold">Log In to Exculsive</h1>
            <p className="text-center text-muted mb-4">Enter Your Details Below</p>
            
            <form>
              

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
            <div className="d-flex justify-content-between align-items-center">
              <button 
                type="submit" 
                className="btn btn-danger btn-lg w-50 py-3 fw-bold mb-3"
              >
                Log In
        
              </button>
              <a className="text-danger" href="#">Forget Password?</a>
</div>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;