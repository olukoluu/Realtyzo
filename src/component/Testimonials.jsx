import React from "react";
import { Navigation, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsStarFill } from "react-icons/bs";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const Testimonials = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ delay: 0.2, duration: 0.2 }}
      className="container-fluid py-5"
    >
      <h2 className=" display-6 fw-normal text-center mb-3">
        Clients Testimonials
      </h2>
      <Swiper
        className=" px-5"
        modules={[Navigation, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        breakpoints={{
          0: {
            spaceBetween: 20,
            slidesPerView: 1,
          },
          768: {
            spaceBetween: 50,
            slidesPerView: 2,
          },
          1000: {
            spaceBetween: 50,
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide>
          <div className="card text-center">
            <div className="card-body">
              <img
                src="./images/user.jpg"
                className=" w-25 rounded-circle mb-2"
                alt=""
              />
              <h5 className="card-title">Denzel Washington</h5>
              <p className=" text-secondary mb-0">Banker</p>
              <div className=" my-2">
                <BsStarFill color="orange" />
                <BsStarFill color="orange" />
                <BsStarFill color="orange" />
                <BsStarFill color="orange" />
                <BsStarFill color="orange" />
              </div>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae,
                dolores.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card text-center">
            <div className="card-body">
              <img
                src="./images/user.jpg"
                className=" w-25 rounded-circle mb-2"
                alt=""
              />
              <h5 className="card-title">Denzel Washington</h5>
              <p className=" text-secondary mb-0">Banker</p>
              <div className=" my-2">
                <BsStarFill color="orange" />
                <BsStarFill color="orange" />
                <BsStarFill color="orange" />
                <BsStarFill color="orange" />
                <BsStarFill color="orange" />
              </div>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae,
                dolores.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card text-center">
            <div className="card-body">
              <img
                src="./images/user.jpg"
                className=" w-25 rounded-circle mb-2"
                alt=""
              />
              <h5 className="card-title">Denzel Washington</h5>
              <p className=" text-secondary mb-0">Banker</p>
              <div className=" my-2">
                <BsStarFill color="orange" />
                <BsStarFill color="orange" />
                <BsStarFill color="orange" />
                <BsStarFill color="orange" />
                <BsStarFill color="orange" />
              </div>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae,
                dolores.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card text-center">
            <div className="card-body">
              <img
                src="./images/user.jpg"
                className=" w-25 rounded-circle mb-2"
                alt=""
              />
              <h5 className="card-title">Denzel Washington</h5>
              <p className=" text-secondary mb-0">Banker</p>
              <div className=" my-2">
                <BsStarFill color="orange" />
                <BsStarFill color="orange" />
                <BsStarFill color="orange" />
                <BsStarFill color="orange" />
                <BsStarFill color="orange" />
              </div>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae,
                dolores.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card text-center">
            <div className="card-body">
              <img
                src="./images/user.jpg"
                className=" w-25 rounded-circle mb-2"
                alt=""
              />
              <h5 className="card-title">Denzel Washington</h5>
              <p className=" text-secondary mb-0">Banker</p>
              <div className=" my-2">
                <BsStarFill color="orange" />
                <BsStarFill color="orange" />
                <BsStarFill color="orange" />
                <BsStarFill color="orange" />
                <BsStarFill color="orange" />
              </div>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae,
                dolores.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </motion.div>
  );
};

export default Testimonials;
