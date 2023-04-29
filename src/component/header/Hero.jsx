import React from "react";
import { Button } from "react-bootstrap";
import { AiOutlineArrowRight } from "react-icons/ai";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 2 }}
      className=" container d-flex justify-content-center align-items-center"
      style={{ marginTop: "75px" }}
    >
      <div className="row" style={{ padding: "60px 0 80px" }}>
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 0.2, duration: 2 }}
          className="hero_txt col-lg-6 d-flex flex-column justify-content-center"
        >
          <h1 className=" fw-bold display-4">
            Real Estate Made Easy With Realtyzo
          </h1>
          <p className=" my-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
            officia cum atque magnam corporis repellendus cupiditate, quos
            voluptate dolorem pariatur dolores, doloribus sequi, nihil libero
            nisi debitis molestiae ratione distinctio ipsam. Repudiandae, id
            perspiciatis quo modi eius architecto dicta consequuntur, est nihil
            distinctio
          </p>
          <div>
            <Button className="me-3 px-4">Find Property</Button>
            <Button className=" bg-dark border-dark">
              <AiOutlineArrowRight />
            </Button>
          </div>
          <div className=" d-flex gap-5 my-4">
            <div>
              <h3>315+</h3>
              <h5 className=" fs-6 fw-semibold">Award winning</h5>
            </div>
            <div>
              <h3>67+</h3>
              <h5 className=" fs-6 fw-semibold">Property Ready</h5>
            </div>
            <div>
              <h3>315+</h3>
              <h5 className=" fs-6 fw-semibold">Happy Customer</h5>
            </div>
          </div>
        </motion.div>
        <div className="col-lg-6">
          <img className="w-100 h-100" src="./images/house3.png" alt="" />
        </div>

        <div className="col-lg-12"></div>
      </div>
    </motion.div>
  );
};

export default Hero;
