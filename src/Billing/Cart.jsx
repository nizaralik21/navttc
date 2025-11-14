import React from "react";

const ShoppingCart = () => {
  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          {/* Cart Header */}
          <div className="row border-bottom pb-2 fw-bold">
            <div className="col-md-5">Product</div>
            <div className="col-md-2">Price</div>
            <div className="col-md-2">Quantity</div>
            <div className="col-md-2">Subtotal</div>
            <div className="col-md-1"></div>
          </div>

          {/* LCD Monitor Item */}
          <div className="row border-bottom py-3 align-items-center">
            <div className="col-md-5">LCD Monitor</div>
            <div className="col-md-2">$650</div>
            <div className="col-md-2">01</div>
            <div className="col-md-2">$650</div>
            <div className="col-md-1"></div>
          </div>

          {/* HI Gamepad Item */}
          <div className="row border-bottom py-3 align-items-center">
            <div className="col-md-5">HI Gamepad</div>
            <div className="col-md-2">$550</div>
            <div className="col-md-2">02</div>
            <div className="col-md-2">$100</div>
            <div className="col-md-1"></div>
          </div>
          <div className="row">
            <div className="col-md-6"></div>
                
            <div className="col-md-6"></div>
          </div>

          {/* Coupon Section */}
          <div className="row mt-4">
            <div className="col-md-6">
              <div className="input-group">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Apply Coupon"
                />
                <button className="btn btn-outline-secondary" type="button">
                  Apply Coupon
                </button>
              </div>
            </div>
          </div>

          {/* Checkout Button */}
          <div className="row mt-4">
            <div className="col-md-12">
              <button className="btn btn-primary w-100">
                Process to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;