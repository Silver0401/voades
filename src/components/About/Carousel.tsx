// Libraries
import React from 'react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCube } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';

// Scss carousel styling files
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "swiper/components/effect-cube/effect-cube.scss";

// Images
import image1 from "./../../resources/voadesImg1.jpg";
import image2 from "./../../resources/voadesImg2.jpg";
import image3 from "./../../resources/voadesImg3.jpg";
import image4 from "./../../resources/voadesImg4.jpg";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCube])

const Carousel : React.FC = () => {


  return (
    <div className="CarouselContainer">
      <Swiper
        effect="cube"
        spaceBetween={50}
        slidesPerView={1}
        navigation
        autoplay
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img src={image2} alt="voades #1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="voades #1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image4} alt="voades #1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image1} alt="voades #1" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Carousel