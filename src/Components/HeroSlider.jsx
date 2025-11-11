import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { FaApple } from "react-icons/fa";
import styles from "./HeroSlider.module.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const HeroSlider = () => {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper1"
      >
        <SwiperSlide
          className="swiper-slide"
          style={{
            borderRadius: "10px",
          }}
        >
          <div className="row align-items-center h-100"style={{backgroundColor:"#000"}}>
            <div
              className="col-lg-6 d-flex align-items-center"
              style={{
                paddingLeft: "100px",
              }}
            >
              <div>
                <div style={{color: "white"}} className="label d-flex gap-3 align-items-center">
                  <div>
                    <FaApple className={styles.icon} />
                  </div>
                  <div className={styles.lableTitle}>
                    {" "}
                    <p>iPhone 14 Series</p>{" "}
                  </div>
                </div>
                <div className={styles.heading}>
                  <h1 style={{color: "white"}}>
                    Up to 10% <br /> off Voucher
                  </h1>
                  <button style={{background:"black", color: "white"}}>Shop Now  →</button>

                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <img
                src="/images/1st slide.png"
                width="100%"
                height="100%"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        
        <SwiperSlide
          className="swiper-slide"
          style={{
            borderRadius: "10px",
          }}
        >
          <div className="row align-items-center h-100"style={{backgroundColor:"#000"}}>
            <div
              className="col-lg-6 d-flex align-items-center"
              style={{
                paddingLeft: "100px",
              }}
            >
              <div>
                <div style={{color: "white"}} className="label d-flex gap-3 align-items-center">
                  <div>
                    <FaApple className={styles.icon} />
                  </div>
                  <div className={styles.lableTitle}>
                    {" "}
                    <p>iPhone 14 Series</p>{" "}
                  </div>
                </div>
                <div className={styles.heading}>
                  <h1 style={{color: "white"}}>
                    Up to 10% <br /> off Voucher
                  </h1>
                  <button style={{color: "white"}}>Shop Now</button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <img
                src="/images/1st slide.png"
                width="100%"
                height="100%"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
};

export default HeroSlider;