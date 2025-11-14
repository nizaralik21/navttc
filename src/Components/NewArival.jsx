import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const NewArrival = () => {
  const items = {
    image1: "/Images/Speaker_L.png",
    image2: "/Images/Speaker.png",
    image3: "/Images/Girl.png",
    image4: "/Images/Perfume.png",
  };

  return (
    <div className="container">
      <div className="mb-3">
        <div className="d-flex align-items-center">
          <div
            className="bg-danger rounded me-2"
            style={{ width: "6px", height: "25px" }}
          ></div>
          <span className="text-danger fw-semibold">Featured</span>
        </div>
        <h1>New Arrival</h1>
      </div>

      <div className="row g-3">
        {/* PlayStation 5 Section */}
        <div className="col-md-6">
          <div
            className="card bg-black text-white h-100 position-relative overflow-hidden"
            style={{ minHeight: "500px" }}
          >
            <div className="card-body p-4 d-flex flex-column justify-content-end position-relative z-2">
              <h3 className="card-title display-6 fw-bold">PlayStation 5</h3>
              <p className="card-text mb-3">
                Black and White version of the PS5 coming out on sale.
              </p>
              <button className="btn btn-outline-light align-self-start">
                Shop Now
              </button>
            </div>
            <img
              src={items.image1}
              alt="PlayStation 5"
              className="position-absolute bottom-0 start-50 translate-middle-x w-70 "
              style={{ height: "90%" }}
            />
          </div>
        </div>

        {/* Right Side Sections */}
        <div className="col-md-6">
          <div className="row g-3 h-100">
            {/* Women's Collection */}
            <div className="col-12">
              <div
                className="card text-white position-relative overflow-hidden"
                style={{
                  minHeight: "240px",
                  backgroundColor: "rgb(14, 14, 14)",
                }}
              >
                <div className="card-body p-4 d-flex flex-column justify-content-end position-relative z-2">
                  <h1 className="card-title fs-4 fw-bold">
                    Women's Collections
                  </h1>
                  <p className="card-text mb-2">
                    Featured woman collections that give you another vibe
                  </p>
                  <button className="btn btn-outline-light align-self-start">
                    Shop Now
                  </button>
                </div>
                <img
                  src={items.image3}
                  alt="Women's Collections"
                  className="position-absolute bottom-0 end-0 w-50 h-auto"
                />
              </div>
            </div>

            {/* Speakers and Perfume */}
            <div className="col-12">
              <div className="row g-3">
                {/* Speakers */}
                <div className="col-md-6">
                  <div
                    className="card bg-dark text-white position-relative overflow-hidden"
                    style={{ minHeight: "240px" }}
                  >
                    <div className="card-body p-3 d-flex flex-column justify-content-end position-relative z-2">
                      <h1 className="card-title fs-5 fw-bold">Speakers</h1>
                      <p className="card-text mb-2">Amazon wireless speakers</p>
                      <button className="btn btn-outline-light align-self-start">
                        Shop Now
                      </button>
                    </div>
                    <img
                      src={items.image2}
                      alt="Speakers"
                      className="position-absolute bottom-0 translate-middle-x start-50 w-50 h-auto"
                    />
                  </div>
                </div>

                {/* Perfume */}
                <div className="col-md-6">
                  <div
                    className="card bg-dark text-white position-relative overflow-hidden"
                    style={{ minHeight: "240px" }}
                  >
                    <div className="card-body p-3 d-flex flex-column justify-content-end position-relative z-2">
                      <h1 className="card-title fs-5 fw-bold">Perfume</h1>
                      <p className="card-text mb-2">GUCCI INTENSE OUD EDP</p>
                      <button className="btn btn-outline-light align-self-start">
                        Shop Now
                      </button>
                    </div>
                    <img
                      src={items.image4}
                      alt="Perfume"
                      className="position-absolute bottom-0 end-0 translate-middle-x w-50 h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
