import React from "react";
import { BsWallet } from "react-icons/bs";
import { AiOutlineCar } from "react-icons/ai";
import { MdOutlineSingleBed } from "react-icons/md";
import { TbBath } from "react-icons/tb";

import { motion } from 'framer-motion'

const CarouselCard = (props) => {
  return (
    <motion.div
      
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: 0.4, duration: 0.4 }}
      className="col"
    >
      <div class="card bg-primary bg-opacity-10">
        <img
          src={`./images/${props.img}`}
          class="card-img-top"
          style={{ height: "180px" }}
          alt="..."
        />
        <div class="card-body">
          <h6 className="card-subtitle text-primary mb-1">FOR SALE</h6>
          <h6 class="card-title">{props.title}</h6>
          <p class="card-text">{props.text}</p>
          <div className=" d-flex justify-content-between">
            <span>
              <BsWallet color="blue" size={14} /> {props.price}
            </span>
            <span>
              <MdOutlineSingleBed /> {props.bedspace}
            </span>
            <span>
              <TbBath /> {props.bathspace}
            </span>
            <span>
              <AiOutlineCar /> {props.carspace}
            </span>
          </div>
        </div>
        <div className="card-footer text-center">
          <button type="button" class="btn btn-primary px-5">
            Send Offer
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CarouselCard;
