import React from "react";
import { Footer } from "./Footer";
import CustomerSupport from './Components/CustomerSupport';
import Leadership from "./AboutComponent/Leadership";


const About = () => {
  return (
    <>
      <div className="container py-5">
        {/* Our Story Section */}
        <div className="row align-items-center mb-5">
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <h1 className="fw-bold mb-4">Our Story</h1>
            <p className="text-muted">
              Launched in 2015, Exclusive is South Asia's premier online shopping 
              marketplace with an active presence in Bangladesh. Supported by wide 
              range of tailored marketing, data and service solutions.
              <br /><br />
              Exclusive has 10,500 sellers and 300 brands and serves 3 million 
              customers across the region. Exclusive has more than 1 Million 
              products to offer, growing at a very fast rate. Exclusive offers a 
              diverse assortment in categories ranging from consumer.
            </p>
          </div>
          <div className="col-lg-6 col-md-12">
            <img 
              src="/Images/About.png" 
              alt="About Exclusive" 
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
        <>
        <Leadership />
        </>
        {/* Stats Section */}
        <div className="row py-5 text-center">
          <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
            <h1 className="fw-bold text-black">10.5k</h1>
            <p className="text-muted">Sellers active on our site</p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
            <h1 className="fw-bold text-black">33k</h1>
            <p className="text-muted">Monthly Product Sale</p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
            <h1 className="fw-bold text-black">45.5k</h1>
            <p className="text-muted">Customers active in our site</p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
            <h1 className="fw-bold text-black">25k</h1>
            <p className="text-muted">Annual gross sale in our site</p>
          </div>
        </div>

        
        <CustomerSupport />
      </div>
    </>
  );
};

export default About;