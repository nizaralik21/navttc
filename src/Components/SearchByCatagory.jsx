import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  CiHeadphones,
  CiMobile4,
  CiCamera,
} from "react-icons/ci";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { IoWatchOutline } from "react-icons/io5";
import { TbDeviceGamepad } from "react-icons/tb";

const categories = [
  { name: "Phones", icon: <CiMobile4 size={40} /> },
  { name: "Computers", icon: <HiOutlineComputerDesktop size={40} /> },
  { name: "SmartWatch", icon: <IoWatchOutline size={40} /> },
  { name: "Camera", icon: <CiCamera size={40} /> },
  { name: "HeadPhones", icon: <CiHeadphones size={40} /> },
  { name: "Gaming", icon: <TbDeviceGamepad size={40} /> },
];

const CategorySlider = () => {
  return (
    <div className="container my-5 position-relative">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="d-flex align-items-center">
          <div
            className="bg-danger rounded me-2"
            style={{ width: "6px", height: "25px" }}
          ></div>
          <span className="text-danger fw-semibold">Categories</span>
        </div>

        {/* Navigation buttons - Cards page ki tarah */}
        <div className="d-flex gap-2">
          <button className="btn btn-light rounded-circle p-2 swiper-button-prev-custom">←</button>
          <button className="btn btn-light rounded-circle p-2 swiper-button-next-custom">→</button>
        </div>
      </div>

      <h2 className="fw-bold mb-4">Browse By Category</h2>

      <Swiper
        slidesPerView={6}
        spaceBetween={20}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        modules={[Navigation]}
        className="mySwiper"
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 10 },
          576: { slidesPerView: 3, spaceBetween: 15 },
          768: { slidesPerView: 4, spaceBetween: 15 },
          992: { slidesPerView: 6, spaceBetween: 20 },
        }}
      >
        {categories.map((cat, index) => (
          <SwiperSlide key={index}>
            <div
              className="text-decoration-none text-center d-block category-box border rounded-4 p-4 shadow-sm"
              style={{
                border: "1px solid #0000001A",
                transition: "all 0.3s ease",
                cursor: "pointer",
                backgroundColor: "white"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#dc3545";
                e.currentTarget.style.backgroundColor = "#dc3545";
                e.currentTarget.querySelector('div').style.color = "white";
                e.currentTarget.querySelector('p').style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#0000001A";
                e.currentTarget.style.backgroundColor = "white";
                e.currentTarget.querySelector('div').style.color = "#000000";
                e.currentTarget.querySelector('p').style.color = "#000000";
              }}
            >
              <div className="mb-2" style={{ 
                color: "#000000",
                transition: "color 0.3s ease"
              }}>
                {cat.icon}
              </div>
              <p className="mb-0 fw-medium" style={{ 
                color: "#000000",
                transition: "color 0.3s ease"
              }}>
                {cat.name}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategorySlider;