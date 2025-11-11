import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  CiHeadphones,
  CiMobile4,
  CiCamera,
} from "react-icons/ci";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { IoWatchOutline } from "react-icons/io5";
import { TbDeviceGamepad } from "react-icons/tb";
import "./SearchByCatagory.css";

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

        {/* Navigation buttons */}
        <div>
          <div className="swiper-button-prev custom-nav"></div>
          <div className="swiper-button-next custom-nav"></div>
        </div>
      </div>

      <h2 className="fw-bold mb-4">Browse By Category</h2>

      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          576: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          992: { slidesPerView: 6 },
        }}
      >
        {categories.map((cat, index) => (
          <SwiperSlide key={index}>
            <a
              href="#"
              className="text-decoration-none text-center d-block category-box border rounded-4 p-4 shadow-sm"
            >
              <div className="mb-2">{cat.icon}</div>
              <p className="mb-0 text-dark">{cat.name}</p>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategorySlider;
