import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaApple, FaArrowRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroSlider = () => {
  const slides = [
    {
      title: "iPhone 14 Series",
      heading: "Up to 10% off Voucher",
      image: "/images/1st slide.png"
    },
    {
      title: "iPhone 15 Pro", 
      heading: "Latest Model Exclusive",
      image: "/images/slide2.png"
    },
    {
      title: "MacBook Air",
      heading: "Up to 15% off Voucher", 
      image: "/images/slide3.png"
    },
    {
      title: "iPad Pro",
      heading: "New Arrival Special",
      image: "/images/slide4.png"
    },
    {
      title: "Apple Watch",
      heading: "Limited Time Offer", 
      image: "/images/slide5.png"
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
      style={{
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="row align-items-center h-100" style={{backgroundColor: "#000", minHeight: "400px"}}>
            <div className="col-lg-6 d-flex align-items-center p-5">
              <div className="text-white">
                <div className="d-flex gap-3 align-items-center mb-3">
                  <FaApple size={24} className="text-white" />
                  <p className="mb-0 fs-5">{slide.title}</p>
                </div>
                <div>
                  <h1 className="display-5 fw-bold mb-4 text-white">
                    {slide.heading}
                  </h1>
                  <button className="btn btn-dark text-white px-4 py-2 d-flex align-items-center gap-2 border border-white">
                    Shop Now <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6 text-center p-3">
              <img
                src={slide.image}
                className="img-fluid"
                style={{maxHeight: "350px", objectFit: "contain"}}
                alt={slide.title}
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;