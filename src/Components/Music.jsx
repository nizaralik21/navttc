import React from "react";

const Music = () => {
  return (
    <div 
      className="container py-5"
      style={{
        backgroundImage: "url('/Images/Frame 600.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "400px"
      }}
    >
      <div className="container h-100">
        <div className="row align-items-center h-100">
          <div className="col-lg-5">
            <p className="text-success mb-1 small">Categories</p>
            <h1 className="text-white h3 fw-bold mb-3">
              Enhance Your <br />
              Music Experience
            </h1>

            <div className="d-flex flex-wrap gap-2 mb-3">
              <div className="bg-white rounded-circle d-flex flex-column justify-content-center align-items-center" 
                   style={{width: "60px", height: "60px"}}>
                <span className="fw-bold small">23</span>
                <small className="x-small">Hours</small>
              </div>
              <div className="bg-white rounded-circle d-flex flex-column justify-content-center align-items-center" 
                   style={{width: "60px", height: "60px"}}>
                <span className="fw-bold small">05</span>
                <small className="x-small">Days</small>
              </div>
              <div className="bg-white rounded-circle d-flex flex-column justify-content-center align-items-center" 
                   style={{width: "60px", height: "60px"}}>
                <span className="fw-bold small">59</span>
                <small className="x-small">Minutes</small>
              </div>
              <div className="bg-white rounded-circle d-flex flex-column justify-content-center align-items-center" 
                   style={{width: "60px", height: "60px"}}>
                <span className="fw-bold small">35</span>
                <small className="x-small">Seconds</small>
              </div>
            </div>

            <button className="btn text-white px-3 py-1 small" style={{ background: "#00FF66" }}>
              Buy Now
            </button>
          </div>

          <div className="col-lg-7 text-center">
            <img 
              src="/images/Music.png" 
              alt="Music Experience" 
              className="img-fluid"
              style={{maxHeight: "300px"}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Music;