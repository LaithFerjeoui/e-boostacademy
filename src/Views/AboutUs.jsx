import React from "react";
import logo from "../../public/logo.png";
const resources = [
  {
    title: "فيديوهات تفسير الدروس",
    img: "https://example.com/path/to/image1.jpg",
  },
  {
    title: "تمارين تطبيقية بالإصلاح",
    img: "https://example.com/path/to/image2.jpg",
  },
  {
    title: "تلاخيص الدروس",
    img: "https://example.com/path/to/image3.jpg",
  },
  {
    title: "كتب موازية",
    img: "https://example.com/path/to/image4.jpg",
  },
  {
    title: "أسئلة تفاعلية",
    img: "https://example.com/path/to/image5.jpg",
  },
  {
    title: "منتدى تفاعلي",
    img: "https://example.com/path/to/image6.jpg",
  },
  {
    title: "حصص مباشرة و تفاعل مع الأساتذة",
    img: "https://example.com/path/to/image7.jpg",
  }
];
const AboutUs = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl ">
        <h2 className=" font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-600 to-blue-800 flex justify-center my-16 ">
          E-Boost Academy كيفية إستعمال منصة
        </h2>
        <div className="flex justify-center items-center flex-wrap w-[90%] mx-auto gap-3">
          <div className="w-full md:w-[20rem]">
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
          </div>
          <div className="w-full  md:w-[20rem]">
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
          </div>
          <div className="w-full md:w-[20rem]">
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
          </div>
        </div>
        <h2 className=" font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-600 to-blue-800 flex justify-center my-16 ">
        ماذا نقدم
        </h2>
      </div>
    </div>
  );
};

export default AboutUs;
