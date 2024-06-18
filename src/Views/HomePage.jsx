import React from "react";
import vid from "../../public/BoostAcademy.mp4";
import logo from "../../public/logo.png";

const HomePage = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl ">
        <div className="w-full flex items-center justify-between flex-wrap mt-20">
          <div className="w-[50%] ">
            <video autoPlay muted controls className="rounded-xl">
              <source src={vid} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="w-[30%] flex-col justify-center items-center mx-auto">
            <img
              className="hidden h-32 w-auto lg:block"
              src={logo}
              alt="e-boostacademy"
            />
            <span className="rtl text-right" >
            منهج مبتكر لنقل المعرفة منصة تعليمية تقدم دروس في جميع الموادالأساسية للأقسام من الثالثة إلى السادسة
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
