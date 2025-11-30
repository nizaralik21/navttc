import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="container py-4 ">
      <div className="row">
        <div className="col py-4">
          <h1>Seller Dashboard</h1>
          <h1> Wellcome Seller Name</h1>
        </div>
        <div className="row">
          <div className="col py-4">
            <button className="btn btn-primary">
              <Link
                to="/addProduct"
                className="text-white text-decoration-none"
              >
                Add Product
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
