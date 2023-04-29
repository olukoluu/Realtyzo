import React from "react";

import { IoCheckmarkSharp } from "react-icons/io5";
import { AiOutlineCar } from "react-icons/ai";
import { FiSquare } from "react-icons/fi";
import { MdLocalDining, MdOutlineBedroomChild } from "react-icons/md";
import { motion } from 'framer-motion'

const TodaySell = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="container"
      >
        <div
          className="row justify-content-center"
          style={{ padding: "50px 0" }}
        >
          <motion.div
            initial={{ x: -50 }}
            whileInView={{ x: 0 }}
            viewport={{once: false, }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="col-lg-6"
          >
            <h3 className=" display-6 fw-semibold">Today Sell Properties</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              dicta voluptatibus similique iusto eos, perspiciatis esse mollitia
              deleniti magni excepturi, labore ducimus aperiam asperiores
              explicabo nihil earum beatae maiores quasi?
            </p>
            <div className="row">
              <h5 className="col-12 fs-6 fw-semibold">
                <span className="badge bg-primary bg-opacity-25 rounded-circle p-1">
                  <IoCheckmarkSharp color="blue" />
                </span>{" "}
                Outstanding property
              </h5>
              <h5 className="col-12 fs-6 fw-semibold ">
                <span className="badge bg-primary bg-opacity-25 rounded-circle p-1">
                  <IoCheckmarkSharp color="blue" />
                </span>{" "}
                Professional and experienced human resources
              </h5>
              <h5 className="col-12 fs-6 fw-semibold ">
                <span className="badge bg-primary bg-opacity-25 rounded-circle p-1">
                  <IoCheckmarkSharp color="blue" />
                </span>{" "}
                Provide the best services for users
              </h5>
              <h5 className="col-12 fs-6 fw-semibold ">
                <span className="badge bg-primary bg-opacity-25 rounded-circle p-1">
                  <IoCheckmarkSharp color="blue" />
                </span>{" "}
                Modern city locations and exceptional lifestyle
              </h5>
              <h5 className="col-lg-5 fs-6 fw-semibold mt-lg-3">
                <span className="badge bg-primary bg-opacity-25 rounded-circle p-1">
                  <AiOutlineCar color="blue" />
                </span>{" "}
                2 car parking
              </h5>
              <h5 className="col-lg-5 fs-6 fw-semibold mt-lg-3">
                <span className="badge bg-primary bg-opacity-25 rounded-circle p-1">
                  <MdLocalDining color="blue" />
                </span>{" "}
                2 Diningrooms
              </h5>
              <h5 className="col-lg-5 fs-6 fw-semibold mt-1">
                <span className="badge bg-primary bg-opacity-25 rounded-circle p-1">
                  <MdOutlineBedroomChild color="blue" />
                </span>{" "}
                3 Bedrooms
              </h5>
              <h5 className="col-lg-5 fs-6 fw-semibold mt-1">
                <span className="badge bg-primary bg-opacity-25 rounded-circle p-1">
                  <FiSquare color="blue" />
                </span>{" "}
                Square ft
              </h5>
            </div>
          </motion.div>

          <div className="col-lg-6">
            <img src="./images/house1.png" className=" w-100" alt="" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TodaySell;
