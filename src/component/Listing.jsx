import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import CarouselCard from "./CarouselCard";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const Listing = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: 0.4, duration: 0.4 }}
      className="container-fluid py-5"
    >
      <h2 className=" display-6 fw-normal text-center mb-3">Feature Listing</h2>
      <Swiper
        className=" px-5"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={4}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        breakpoints={{
          0: {
            spaceBetween: 20,
            slidesPerView: 1,
          },
          665: {
            spaceBetween: 50,
            slidesPerView: 2,
          },
          900: {
            spaceBetween: 50,
            slidesPerView: 4,
          },
        }}
      >
        <SwiperSlide>
          <CarouselCard
            img={"house4.jpg"}
            title={"2-bed Apartment | 67 sqm"}
            text={"Lorem ipsum dolor sit amet"}
            price={1629}
            bedspace={2}
            bathspace={2}
            carspace={2}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard
            img={"house6.jpg"}
            title={"3-bed Apartment | 67 sqm"}
            text={"Lorem ipsum dolor sit amet"}
            price={1629}
            bedspace={3}
            bathspace={2}
            carspace={2}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard
            img={"house5.jpg"}
            title={"2-bed Apartment | 67 sqm"}
            text={"Lorem ipsum dolor sit amet"}
            price={1629}
            bedspace={2}
            bathspace={2}
            carspace={2}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard
            img={"herohouse.jpg"}
            title={"3-bed Apartment | 67 sqm"}
            text={"Lorem ipsum dolor sit amet"}
            price={1629}
            bedspace={3}
            bathspace={2}
            carspace={2}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard
            img={"house6.jpg"}
            title={"3-bed Apartment | 67 sqm"}
            text={"Lorem ipsum dolor sit amet"}
            price={1629}
            bedspace={3}
            bathspace={2}
            carspace={2}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard
            img={"house5.jpg"}
            title={"2-bed Apartment | 67 sqm"}
            text={"Lorem ipsum dolor sit amet"}
            price={1629}
            bedspace={2}
            bathspace={2}
            carspace={2}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard
            img={"herohouse.jpg"}
            title={"3-bed Apartment | 67 sqm"}
            text={"Lorem ipsum dolor sit amet"}
            price={1629}
            bedspace={3}
            bathspace={2}
            carspace={2}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard
            img={"house4.jpg"}
            title={"3-bed Apartment | 67 sqm"}
            text={"Lorem ipsum dolor sit amet"}
            price={1629}
            bedspace={3}
            bathspace={2}
            carspace={2}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard
            img={"house5.jpg"}
            title={"3-bed Apartment | 67 sqm"}
            text={"Lorem ipsum dolor sit amet"}
            price={1629}
            bedspace={3}
            bathspace={2}
            carspace={2}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard
            img={"house6.jpg"}
            title={"3-bed Apartment | 67 sqm"}
            text={"Lorem ipsum dolor sit amet"}
            price={1629}
            bedspace={3}
            bathspace={2}
            carspace={2}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard
            img={"herohouse.jpg"}
            title={"3-bed Apartment | 67 sqm"}
            text={"Lorem ipsum dolor sit amet"}
            price={1629}
            bedspace={3}
            bathspace={2}
            carspace={2}
          />
        </SwiperSlide>
      </Swiper>
      {/* <Carousel>
        <Carousel.Item>
          <div class="row row-cols-1 row-cols-md-4 g-4">
            
            
            
            
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div class="row row-cols-1 row-cols-md-4 g-4">
            <CarouselCard
              img={"house6.jpg"}
              title={"3-bed Apartment | 67 sqm"}
              text={"Lorem ipsum dolor sit amet"}
              price={1629}
              bedspace={3}
              bathspace={2}
              carspace={2}
            />
            <CarouselCard
              img={"house4.jpg"}
              title={"2-bed Apartment | 67 sqm"}
              text={"Lorem ipsum dolor sit amet"}
              price={1629}
              bedspace={2}
              bathspace={2}
              carspace={2}
            />
            <CarouselCard
              img={"house5.jpg"}
              title={"3-bed Apartment | 67 sqm"}
              text={"Lorem ipsum dolor sit amet"}
              price={1629}
              bedspace={3}
              bathspace={2}
              carspace={2}
            />
            <CarouselCard
              img={"house4.jpg"}
              title={"2-bed Apartment | 67 sqm"}
              text={"Lorem ipsum dolor sit amet"}
              price={1629}
              bedspace={2}
              bathspace={2}
              carspace={2}
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div class="row row-cols-1 row-cols-md-4 g-4">
            <CarouselCard
              img={"house5.jpg"}
              title={"3-bed Apartment | 67 sqm"}
              text={"Lorem ipsum dolor sit amet"}
              price={1629}
              bedspace={3}
              bathspace={2}
              carspace={2}
            />
            <CarouselCard
              img={"house4.jpg"}
              title={"2-bed Apartment | 67 sqm"}
              text={"Lorem ipsum dolor sit amet"}
              price={1629}
              bedspace={2}
              bathspace={2}
              carspace={2}
            />
            <CarouselCard
              img={"house4.jpg"}
              title={"2-bed Apartment | 67 sqm"}
              text={"Lorem ipsum dolor sit amet"}
              price={1629}
              bedspace={2}
              bathspace={2}
              carspace={2}
            />
            <CarouselCard
              img={"house6.jpg"}
              title={"3-bed Apartment | 67 sqm"}
              text={"Lorem ipsum dolor sit amet"}
              price={1629}
              bedspace={3}
              bathspace={2}
              carspace={2}
            />
          </div>
        </Carousel.Item>
      </Carousel> */}
    </motion.div>
  );
};

export default Listing;
