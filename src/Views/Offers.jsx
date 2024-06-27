import React from "react";
import OfferCards from '../Components/OfferCards';
import Features from "../Components/Features";
import { motion } from "framer-motion";
const Offers = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl ">
        <motion.h2
            initial={{ opacity: 0, scale: 0.6, y: -40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.2 }} className=" font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-600 to-blue-800 flex justify-center mt-16   mx-auto  w-fit">
          ماذا نقدم
        </motion.h2>
        </div>
        <div className="flex justify-center items-center flex-wrap gap-4 mt-10">
        <OfferCards/>
        </div>
      </div>
      <div>
      <motion.h2
            initial={{ opacity: 0, scale: 0.6, y: -40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.2 }} className=" font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-600 to-blue-800 flex justify-center mt-16   mx-auto  w-fit">
          مميزات المنصة
        </motion.h2>
        <Features />
      </div>
    </>
  );
};

export default Offers;
