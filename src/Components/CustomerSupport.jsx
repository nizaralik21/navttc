import React from "react";

const CustomerSupport = () => {
  return (
    <div>
      <div className="container">
        <div className="row d-flex align-items-center text-center py-5">
          <div className="col-md-4 col-sm-12 mb-4 mb-md-0">
            <img src="/Images/Icon1.png" alt="Free Delivery" className="img-fluid mb-3" style={{maxHeight: "60px"}}/>
            <h3 className="fs-5 fw-bold">FREE AND FAST DELIVERY</h3>
            <p className="text-muted mb-0">Free delivery for all orders over $140</p>
          </div>
          <div className="col-md-4 col-sm-12 mb-4 mb-md-0">
            <img src="/Images/Icon2.png" alt="Customer Service" className="img-fluid mb-3" style={{maxHeight: "60px"}}/>
            <h3 className="fs-5 fw-bold">24/7 CUSTOMER SERVICE</h3>
            <p className="text-muted mb-0">Friendly 24/7 customer support</p>
          </div>
          <div className="col-md-4 col-sm-12">
            <img src="/Images/Icon3.png" alt="Money Back Guarantee" className="img-fluid mb-3" style={{maxHeight: "60px"}}/>
            <h3 className="fs-5 fw-bold">MONEY BACK GUARANTEE</h3>
            <p className="text-muted mb-0">We return money within 30 days</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSupport;