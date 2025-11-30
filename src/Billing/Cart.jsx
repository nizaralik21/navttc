import React from "react";
import { Link } from "react-router-dom";
const ShoppingCart = () => {
  return (
    <div className="container mt-4">
      <div className="card ">
        <div className="card-body">
          {/* Cart Header */}
          <div className="row border-bottom pb-2 fw-bold">
            <div className="col-md-3">Product</div>
            <div className="col-md-3">Price</div>
            <div className="col-md-3">Quantity</div>
            <div className="col-md-3">Subtotal</div>
            
          </div>

          {/* LCD Monitor Item */}
          <div className="row border-bottom py-4 align-items-center">
            <div className="col-md-3">LCD Monitor</div>
            <div className="col-md-3">$650</div>
            <div className="col-md-3">01</div>
            <div className="col-md-3">$650</div>
          </div>

          {/* HI Gamepad Item */}
          <div className="row border-bottom py-4 align-items-center">
            <div className="col-md-3">HI Gamepad</div>
            <div className="col-md-3">$550</div>
            <div className="col-md-3">02</div>
            <div className="col-md-3">$100</div>

          </div>
          <div className="row py-4">
            <div className="col-md-6">
                <button className="btn-light">Return to Shop</button></div>
            <div className="col-md-6">
            <button className="btn-light align-items-start">Return to Shop</button>

            </div>
          </div>

          {/* Coupon Section */}
          <div className="row mt-4 py-4">
            <div className="col-md-4">
              <div className="input-group">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Apply Coupon"
                />
                <button className="btn btn-danger" type="button">
                  Apply Coupon
                </button>
              </div></div>
           <div className="col-md-4 offset-md-3 py-4"><h3>Cart Total</h3>
            <div className="row">
              <div className="col-6"><p>SubTotal</p> </div>
              <div className="col-6"> $1750</div>
            </div>
            <div className="row">
              <div className="col-6"><p>Shipping</p></div>
              <div className="col-6">Free</div>
            </div>
            <div className="row">
              <div className="col-6">Total</div>
              <div className="col-6"> $1750 </div>
            </div>
            <div className="row mt-4">
            <div className="col-md-12">
              <button className="btn btn-danger">
                Process to checkout
              </button>
                <Link to="/payment">Payment</Link>
           </div>
           
          </div>          
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;