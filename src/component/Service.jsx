import React from "react";
import Card from "./Card";
import { BiHomeCircle } from "react-icons/bi";
import { GiReceiveMoney } from "react-icons/gi";
import { FaRegHandshake } from "react-icons/fa";
import { MdOutlineSecurity, MdOutlineApartment } from "react-icons/md";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { motion } from "framer-motion";

const Service = () => {
  return (
    <motion.div
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        duration: 0.5,
        delayChildren: 0.3,
        staggerChildren: 0.2,
      }}
      className=" container py-5"
    >
      <h2 className="display-6 fw-normal text-center mb-3">Our Services</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <Card
          icon={<BiHomeCircle size={80} />}
          subtitle="Buy a home"
          text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, molestiae reprehenderit voluptate itaque ad repellendus."
        />
        <Card
          icon={<GiReceiveMoney size={80} />}
          subtitle="Rent a home"
          text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, molestiae reprehenderit voluptate itaque ad repellendus."
        />
        <Card
          icon={<FaRegHandshake size={80} />}
          subtitle="Become an agent"
          text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, molestiae reprehenderit voluptate itaque ad repellendus."
        />
        <Card
          icon={<MdOutlineSecurity size={80} />}
          subtitle="Extra Security"
          text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, molestiae reprehenderit voluptate itaque ad repellendus."
        />
        <Card
          icon={<MdOutlineApartment size={80} />}
          subtitle="Luxury Apartment"
          text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, molestiae reprehenderit voluptate itaque ad repellendus."
        />
        <Card
          icon={<HiOutlineBuildingOffice size={80} />}
          subtitle="Office Revolution"
          text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, molestiae reprehenderit voluptate itaque ad repellendus."
        />
      </div>
    </motion.div>
  );
};

export default Service;
