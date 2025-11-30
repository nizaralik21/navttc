import React, { useState } from "react";
const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

    const loginhandler = async (e) =>{
      e.preventDefault();
      
      if (!email || !password) {
        alert("Please enter both email and password");
        return;
      }

      try {
        const response = await fetch("http://localhost:7000/api/login", {
          method: 'POST',
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            email: email,
            password: password
          })
        });
        const result = await response.json();
        if (response.ok){
          if(result.usertype === "seller"){
            window.location.href = "/Dashboard"
          }else {
            window.location.href = "/"
          }
        } else {
          alert(result.message || "Login failed. Please check your credentials.");
        }
      } catch (error) {
        console.log(error);
        alert(error.message);
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
            style={{objectFit: 'cover'}}
          />
        </div>

        <div className="col-md-5 offset-md-1 d-flex align-items-center justify-content-center py-5">
          <div className="w-75">
            <h1 className="text-center mb-2 fw-bold">Log In to Exculsive</h1>
            <p className="text-center text-muted mb-4">Enter Your Details Below</p>
            
            <form onSubmit={loginhandler}>
              

              <div className="mb-3">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control form-control-lg border-0 border-bottom rounded-0" 
                  id="email"
                  placeholder="Email or phone number"
                />
              </div>

              <div className="mb-3">
                <input 
                  type="password"
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)}
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
        
              </button >
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