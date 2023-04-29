import React from "react";
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    viewport={{once: false}}
    transition={{delay: 0.4}} 
    className="container-fluid p-lg-5 bg-dark text-white">
      <div className="row lh-lg">
        <div className="col-lg-3 me-5 my-4 my-lg-0">
            <h2 className=" text-primary">Real<span className=" text-white">tyzo</span></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <div className=" mt-5 mt-lg-0 col-6 col-lg-2">
          <h5 className=" mb-3">About</h5>
          <p>About Us</p>
          <p>Features</p>
          <p>News & Blogs</p>
        </div>
        <div className=" mt-5 mt-lg-0 col-6 col-lg-2">
          <h5 className=" mb-3">Company</h5>
          <p>How we work?</p>
          <p>Capital</p>
          <p>Security</p>
        </div>
        <div className=" mt-5 mt-lg-0 col-6 col-lg-2">
          <h5 className=" mb-3">Support</h5>
          <p>FAQs</p>
          <p>Support Center</p>
          <p>Contact Us</p>
        </div>
        <div className=" mt-5 mt-lg-0 col-6 col-lg-2">
          <h5 className=" mb-3">Movement</h5>
          <p>What Realtyzo</p>
          <p>Support Us</p>
        </div>
      </div>
      <small>developed by Sekani</small>
    </motion.div>
  );
};


//animation

export default Footer;
