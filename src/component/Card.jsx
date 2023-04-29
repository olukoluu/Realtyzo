import React from "react";
import { motion } from "framer-motion";

const Card = (props) => {
  return (
    <motion.div
      initial={{ y: 200, scale: 0 }}
      whileInView={{ y: 0, scale: 1 }}
      className="col"
    >
      <div className="card py-4 bg-primary bg-opacity-10 border-0">
        <div className="card-body text-center d-flex flex-column justify-content-center align-items-center gap-2">
          <div className="icon w-25 rounded-circle px-3 d-flex bg-primary bg-opacity-25">
            {props.icon}
          </div>
          <h5 className="card-title fw-bold">{props.subtitle}</h5>
          <p className="card-text">{props.text}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
