import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaApple, FaArrowRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Styles from "../All.module.css"
import axios from "axios";
import { useEffect, useState } from "react";


const HeroSlider = () => {
  const [productList, setProductList] = useState([]);
  useEffect(() =>{
    const fetchData = async () =>{
      try {
        const res = await axios.get("http://localhost:7000/api/getProductList")
        setProductList(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData();
  },[])
  const slides = [
    {
      title: "iPhone 14 Series",
      heading: "Up to 10% off Voucher",
      image: "/Images/1st slide.png"
    },
    {
      title: "iPhone 15 Pro",
      heading: "Latest Model Exclusive",
      image: "/Images/slide2.png"
    },
    {
      title: "MacBook Air",
      heading: "Up to 15% off Voucher",
      image: "/Images/slide3.png"
    },
    {
      title: "iPad Pro",
      heading: "New Arrival Special",
      image: "/Images/slide4.png"
    },
    {
      title: "Apple Watch",
      heading: "Limited Time Offer",
      image: "/Images/slide5.png"
    }
  ];

  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="mySwiper1"
      breakpoints={{
        320: { slidesPerView: 1 },
        768: { slidesPerView: 1 },
        992: { slidesPerView: 1 }
      }}
      style={{
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="row align-items-center h-100" style={{backgroundColor: "#000", minHeight: "350px"}}>
            <div className="col-lg-6 d-flex align-items-center p-3 p-md-4 p-lg-5">
              <div className="text-white">
                <div className="d-flex gap-3 align-items-center mb-3">
                  <FaApple size={24} className="text-white" />
                  <p className="mb-0 fs-6 fs-md-5">{slide.title}</p>
                </div>
                <div>
                  <h1 className="fs-3 fs-md-2 fs-lg-1 fw-bold mb-3 mb-md-4 text-white">
                    {slide.heading}
                  </h1>
                  <button className={`btn text-white px-3 px-md-4 py-2 d-flex align-items-center gap-2 ${Styles.btn}`}>
                    Shop Now <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6 text-center p-2 p-md-3">
              <img
                src={slide.image}
                className="img-fluid"
                style={{maxHeight: "300px", objectFit: "contain"}}
                alt={productList[index] ? productList[index].title : slide.title}
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;