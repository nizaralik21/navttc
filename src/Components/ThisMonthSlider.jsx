import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaHeart, FaEye, FaStar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const Products = [
  {
    id: 1,
    title: "HAVIT HV-G92 Gamepad",
    discountPercent: 40,
    price: 120,
    oldPrice: 160,
    rating: 3,
    ratingCount: 88,
    img: "/images/Coat.png",
  },
  {
    id: 2,
    title: "AK-900 Wired Keyboard",
    discountPercent: 35,
    price: 960,
    oldPrice: 1160,
    rating: 5,
    ratingCount: 75,
    img: "/images/Bag.png",
  },
  {
    id: 3,
    title: "IPS LCD Gaming Monitor",
    discountPercent: 30,
    price: 370,
    oldPrice: 400,
    rating: 5,
    ratingCount: 99,
    img: "/images/Cooler.png",
  },
  {
    id: 4,
    title: "S-Series Comfort Chair",
    discountPercent: 25,
    price: 375,
    oldPrice: 400,
    rating: 4,
    ratingCount: 99,
    img: "/images/Table.png",
  },
];

const ThisMonthSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="container py-5 position-relative">
      {/* Header */}
      <div className="d-flex align-items-center mb-3">
        <div className="bg-danger rounded me-2" style={{ width: "6px", height: "25px" }}></div>
        <span className="text-danger fw-semibold">This Month</span>
      </div>

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">Best Selling Products</h2>
        <div className="d-flex gap-2">
          <button ref={prevRef} className="btn btn-light rounded-circle p-2">←</button>
          <button ref={nextRef} className="btn btn-light rounded-circle p-2">→</button>
        </div>
      </div>

      {/* Swiper Slider */}
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        modules={[Navigation]}
        className="mySwiper"
        breakpoints={{
          0: { 
            slidesPerView: 1,
            spaceBetween: 10
          },
          576: { 
            slidesPerView: 2,
            spaceBetween: 15  
          },
          768: { 
            slidesPerView: 3,
            spaceBetween: 15
          },
          992: { 
            slidesPerView: 4,
            spaceBetween: 20
          },
        }}
      >
        {Products.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="card border-0 shadow-sm position-relative product-card h-100 mx-auto" style={{maxWidth: "280px"}}>
              {/* Discount Badge */}
              <div className="badge bg-danger position-absolute start-0 m-2">
                -{item.discountPercent}%
              </div>

              {/* Icons */}
              <div className="position-absolute top-0 end-0 m-2 d-flex flex-column gap-2">
                <button className="btn btn-light p-1 rounded-circle shadow-sm">
                  <FaHeart />
                </button>
                <button className="btn btn-light p-1 rounded-circle shadow-sm">
                  <FaEye />
                </button>
              </div>

              {/* Product Image */}
              <div className="d-flex justify-content-center align-items-center" style={{height: "250px", backgroundColor: "#f5f5f5"}}>
                <img 
                  src={item.img} 
                  className="img-fluid"
                  style={{
                    maxHeight: "200px", 
                    maxWidth: "200px",
                    objectFit: "contain"
                  }}
                  alt={item.title}
                />
              </div>

              {/* Product Info */}
              <div className="card-body text-center d-flex flex-column">
                <h6 className="fw-semibold mb-2">{item.title}</h6>

                <div className="d-flex justify-content-center gap-2 mb-2">
                  <span className="text-danger fw-bold">${item.price}</span>
                  <span className="text-muted text-decoration-line-through">
                    ${item.oldPrice}
                  </span>
                </div>

                {/* Rating */}
                <div className="d-flex justify-content-center align-items-center text-warning mb-3">
                  {[...Array(item.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                  <span className="text-muted ms-1">({item.ratingCount})</span>
                </div>

                {/* Add to Cart */}
                <button className="btn btn-dark w-100 add-cart-btn mt-auto">Add To Cart</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* View All Button */}
      <div className="text-center mt-5">
        <button className="btn btn-danger px-4 py-2">View All Products</button>
      </div>
    </div>
  );
};

export default ThisMonthSlider;