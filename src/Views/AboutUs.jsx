import React from "react";
import ab1 from "../../public/images/abt1.jpg";
import ab2 from "../../public/images/abt2.jpg";
import ab3 from "../../public/images/abt3.jpg";
import ab4 from "../../public/images/abt4.jpg";
import ab5 from "../../public/images/abt5.jpg";
import ab6 from "../../public/images/abt6.jpg";
import trust1 from "../../public/images/trust1.jpeg";
import trust2 from "../../public/images/trust2.jpeg";
import trust3 from "../../public/images/trust3.jpeg";
import { motion } from "framer-motion";
import PrimaryButton from "../Components/PrimaryButton";
const companies = [
  {

    img: trust1,
  },
  {

    img: trust2,
  },
  {
   
    img: trust3,
  }
];

const resources = [
  {
    title: "فيديوهات تفسير الدروس",
    img: ab3,
  },
  {
    title: "تمارين تطبيقية بالإصلاح و تلاخيص الدروس",
    img: ab2,
  },
  {
    title: "كتب موازية",
    img: ab1,
  },
  {
    title: "أسئلة تفاعلية",
    img: ab6,
  },
  {
    title: "منتدى تفاعلي",
    img: ab5,
  },
  {
    title: "حصص مباشرة و تفاعل مع الأساتذة",
    img: ab4,
  },
];
const AboutUs = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl ">
        <h2 className=" font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-600 to-blue-800 flex justify-center  my-16 border-b mx-auto border-gray-900 w-fit ">
          E-Boost Academy كيفية إستعمال منصة
        </h2>
        <div className="flex justify-center items-center flex-wrap w-[90%] mx-auto gap-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.6, y: -80 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-[20rem]"
          >
            <span className="text-center flex justify-center items-center mb-4 font-bold text-gray-800">
              فيديو طريقة الدفع
            </span>
            <div className="w-full rounded-xl overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/XHOmBV4js_E"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.6, y: -80 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full  md:w-[20rem]"
          >
            <span className="text-center flex justify-center items-center mb-4 font-bold text-gray-800">
              فيديو كيفية التسجيل
            </span>
            <div className="w-full rounded-xl overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/XHOmBV4js_E"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.6, y: -80 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-[20rem]"
          >
            <span className="text-center flex justify-center items-center mb-4 font-bold text-gray-800">
              فيديو كيفية إستعمال المنصة
            </span>
            <div className="w-full rounded-xl overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/XHOmBV4js_E"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
        <h2 className=" font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-600 to-blue-800 flex justify-center my-16 border-b   mx-auto border-gray-900 w-fit">
          ماذا نقدم
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {resources.map((resource, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.6, y: -80 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5 * index }}
              key={index}
              className="rounded-lg shadow-lg overflow-hidden pb-4 border-2 border-gray-900/20 "
            >
              <img
                src={resource.img}
                alt={resource.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg text-gray-800 font-bold flex justify-center py-4">
                  {resource.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
        <h2 className=" font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-600 to-blue-800 flex justify-center my-16 mx-auto border-b  border-gray-900 w-fit">
          يثقون بنا
        </h2>
        <div className="flex justify-center items-center space-x-8 gap-16 flex-wrap">
          {companies.map((company, index) => (
            <div key={index} className="flex flex-col items-center hover:scale-105 duration-150">
              <img
                src={company.img}
                className="w-full object-contain rounded-lg"
              />
            </div>
          ))}
        </div>
        <div className="mx-auto w-full flex justify-around items-center mt-20">
        <PrimaryButton text={"اشترك الآن"} />
        <span className="text-gray-900 font-bold">إشترك الأن و إنظم إلى التلامذة المتفوقون</span>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
