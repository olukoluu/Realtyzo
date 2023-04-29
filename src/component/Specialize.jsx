import React from "react";
import { IoCheckmarkSharp } from "react-icons/io5";
import { motion } from "framer-motion";

const Specialize = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{
        delay: 0.2,
        duration: 0.5
      }}
      className="container"
    >
      <div className="row justify-content-center" style={{ padding: "50px 0" }}>
        <div className="col-lg-6">
          <img src="./images/house2.png" className=" w-100" alt="" />
        </div>

        <motion.div
          initial={{ x: -80 }}
          whileInView={{ x: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="col-lg-6"
        >
          <h3 className=" fs-1 fw-bolder mt-5 mt-md-0">
            We Specialize In Quality Home Renovations
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
            aspernatur eum ipsum fugiat officia sunt quod corrupti adipisci
            maxime nemo reiciendis, eos excepturi? Dolorem cupiditate quisquam
            aliquam odit autem ipsam molestiae enim,
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
                <IoCheckmarkSharp color="blue" />
              </span>{" "}
              Smart Home Design
            </h5>
            <h5 className="col-lg-5 fs-6 fw-semibold mt-lg-3">
              <span className="badge bg-primary bg-opacity-25 rounded-circle p-1">
                <IoCheckmarkSharp color="blue" />
              </span>{" "}
              Beautiful Scene Around
            </h5>
            <h5 className="col-lg-5 fs-6 fw-semibold mt-1">
              <span className="badge bg-primary bg-opacity-25 rounded-circle p-1">
                <IoCheckmarkSharp color="blue" />
              </span>{" "}
              Exceptional Lifestyle
            </h5>
            <h5 className="col-lg-5 fs-6 fw-semibold mt-1">
              <span className="badge bg-primary bg-opacity-25 rounded-circle p-1">
                <IoCheckmarkSharp color="blue" />
              </span>{" "}
              Complete 24/7 Security
            </h5>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Specialize;
