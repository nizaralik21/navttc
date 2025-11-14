import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaHeart, FaEye, FaStar } from "react-icons/fa";
import { Grid, Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/grid';
import "../App.css"
import "./Cards.module.css"

const Products = [
    {
      id: 1,
      title: "Breed Dry Dog Food",
      discountPercent: 15,
      price: 380,
      oldPrice: 9000,
      rating: 3,
      ratingCount: 24,
      img: "/images/DogFood.png",
      
    },
    {
      id: 2,
      title: "CANON EOS DSLR Camera",
      discountPercent: 20,
      price: 700,
      oldPrice: 9000,
      rating: 4,
      ratingCount: 32,
      img: "/images/Cam2.png",
      
    },
    {
      id: 3,
      title: "ASUS FHD Gaming Laptop",
      discountPercent: 10,
      price: 500,
      oldPrice: 9000,
      rating: 5,
      ratingCount: 45,
      img: "/images/Laptop.png",
     
    },
    {
      id: 4,
      title: "Curology Product Set ",
      discountPercent: 25,
      price: 960,
      oldPrice: 9000,
      rating: 5,
      ratingCount: 50,
      img: "/images/Curology.png",
      
    },
    {
      id: 5,
      title: "Kids Electric Car",
      discountPercent: 30,
      price: 960,
      oldPrice: 9000,
      rating: 5,
      ratingCount: 38,
      img: "/images/KidsCar.png",
    },
    {
      id: 6,
      title: "Jr. Zoom Soccer Cleats",
      discountPercent: 18,
      price: 60,
      oldPrice: 9000,
      rating: 5,
      ratingCount: 42,
      img: "/images/Shoes.png",
      
    },
    {
      id: 7,
      title: "GP11 Shooter USB Gamepad",
      discountPercent: 18,
      price: 60,
      oldPrice: 9000,
      rating: 5,
      ratingCount: 42,
      img: "/images/Game2.png",
      
    },
    {
      id: 8,
      title: "Quilted Satin Jacket",
      discountPercent: 18,
      price: 60,
      oldPrice: 9000,
      rating: 5,
      ratingCount: 42,
      img: "/images/Jacket.png",
      
    }
  ]

const DoubleSlider = () => {
  return (
    <div className="container py-5">
      {/* Header */}
      <div className="d-flex align-items-center mb-3">
        <div className="bg-danger rounded me-2" style={{ width: "6px", height: "25px" }}></div>
        <span className="text-danger fw-semibold">Our Products</span>
      </div>

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">Explore Our Products</h2>
        <div className="d-flex gap-2">
          <button className="btn btn-light rounded-circle p-2">←</button>
          <button className="btn btn-light rounded-circle p-2">→</button>
        </div>
      </div>

      {/* Swiper Slider */}
      <Swiper
       slidesPerView={4}  // 4 products per row
        grid={{
          rows: 2,        // 2 rows
          fill: 'row'
        }}
        spaceBetween={30}
        modules={[Grid, Navigation]}
        className="mySwiper"
      
      >
        {Products.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="card border-0 shadow-sm position-relative product-card">
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
              <div className="image1"><img src={item.img} className="bg card-img-top p-3" alt={item.title} /></div>
{/* Add to Cart */}
                <button className="btn btn-dark w-100 add-cart-btn">Add To Cart</button>
              {/* Product Info */}
              <div className="card-body text-center">
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
export default DoubleSlider;