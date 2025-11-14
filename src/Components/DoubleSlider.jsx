import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaHeart, FaEye, FaStar } from "react-icons/fa";
import { Grid, Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/grid';
import "../App.css"

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
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="container py-5 position-relative">
      {/* Header */}
      <div className="d-flex align-items-center mb-3">
        <div className="bg-danger rounded me-2" style={{ width: "6px", height: "25px" }}></div>
        <span className="text-danger fw-semibold">Our Products</span>
      </div>

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">Explore Our Products</h2>
        <div className="d-flex gap-2">
          <button ref={prevRef} className="btn btn-light rounded-circle p-2">←</button>
          <button ref={nextRef} className="btn btn-light rounded-circle p-2">→</button>
        </div>
      </div>

      {/* Swiper Slider */}
      <Swiper
        slidesPerView={4}
        grid={{
          rows: 2,
          fill: 'row'
        }}
        spaceBetween={30}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        modules={[Grid, Navigation]}
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
                  <div>
                    <button className="btn btn-dark w-100 add-cart-btn mt-auto">Add To Cart</button>
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