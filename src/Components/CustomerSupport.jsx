import React from "react";

const CustomerSupport = () => {
  return (
    <div>
      <div className="container ">
        <div className="row d-flex align-items-center text-center py-5 ">
          <div className="col-4">
            <img src="/Images/Icon1.png" alt=""/>
            <h3>FREE AND FAST DELIVERY</h3>
            <p>Free delivery for all orders over $140</p>
          </div>
          <div className="col-4">
            <img src="/Images/Icon2.png" alt="" />
            <h3>24/7 CUSTOMER SERVICE</h3>
            <p>Friendly 24/7 customer support</p>
          </div>
          <div className="col-4">
            <img src="/Images/Icon3.png" alt="" />
            <h3>MONEY BACK GUARANTEE</h3>
            <p>We reurn money within 30 days</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSupport;
