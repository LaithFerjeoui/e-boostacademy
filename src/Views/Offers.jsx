import React from "react";
import OfferCards from '../Components/OfferCards';
import Features from "../Components/Features";
const Offers = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl ">
          <h1 className="mt-12 mb-20 text-6xl font-bold font-mono text-gray-600 text-center ">
            عروضنا الخاصة
          </h1>
        </div>
        <div className="flex justify-center items-center flex-wrap gap-4 mt-10">
        <OfferCards/>
        </div>
      </div>
      <div>
        <h1 className="mt-12 mb-20 text-6xl font-bold font-mono text-gray-600 text-center ">
          مميزات المنصة
        </h1>
        <Features />
      </div>
    </>
  );
};

export default Offers;
