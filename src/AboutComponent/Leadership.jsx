import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const teamMembers = [
  {
    id: 1,
    name: "Tom Cruise",
    designation: "Founder & Chairman",
    image: "/Images/Tom Cruise.png",
    icons: ["FaTwitter", "FaInstagram", "FaLinkedin"]
  },
  {
    id: 2, 
    name: "Emma Watson",
    designation: "Managing Director",
    image: "/Images/Emma Watson.png",
    icons: ["FaTwitter", "FaInstagram", "FaLinkedin"]
  },
   {
    id: 2, 
    name: "Emma Watson",
    designation: "Managing Director",
    image: "/Images/Emma Watson.png",
    icons: ["FaTwitter", "FaInstagram", "FaLinkedin"]
  },
  {
    id: 3,
    name: "Will Smith", 
    designation: "Product Designer",
    image: "/Images/Will Smith.png",
    icons: ["FaTwitter", "FaInstagram", "FaLinkedin"]
  }
];
export default function Leadership() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        pagination={true}
        modules={[Pagination]}
        className="mySwiper"
      >
        {teamMembers.map((member) =>
                <SwiperSlide>
                    <div><img src={member.image} alt="" /></div>
                    <div><h1>{member.name}</h1></div>
                    <div>{member.designation}</div>
                </SwiperSlide>
        )}
        
      </Swiper>
    </>
  );
}
