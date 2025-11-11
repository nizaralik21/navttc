import React from "react";

const Music = () => {
  return (
    <div className="container crcl">
      <div className="row align-items-center h-100 px-5">
        <div className="col-lg-5">
          <p style={{ color: "#00FF66" }}>Catagories</p>
          <h1 style={{ color: "white" }}>
            Enhance Your <br />
            Music Experience{" "}
          </h1>

          <div className="circles">
            <div className="circle">
              23 <br />
              Hours
            </div>
            <div className="circle">
              05 <br />
              Days
            </div>
            <div className="circle">
              59 <br />
              Minutes
            </div>
            <div className="circle">
              35 <br /> Seconds
            </div>
          </div><div >
          <button style={{ background: "#00FF66", color:"white" }} className="btn text-center px-30 py-2">
            Buy Now
          </button></div>
        </div>

        <div className="col-lg-7 ">
          <img src="" alt="" />
          <img src="/images/Music.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Music;
