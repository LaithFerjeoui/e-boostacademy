import React from "react";
import vid from "../../public/BoostAcademy.mp4";
import logo from "../../public/logo.png";
import About from "../Components/About";
import Stats from "../Components/Stats";
import { InfiniteMovingCards } from "../Components/Infinite-moving-cards";
import { motion } from "framer-motion";
export const fadeIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});
const testimonials = [
  {
    quote:
      "Merci pour l'échappatoire, La plateforme est très riche, très simple à utiliser et faite d'une façon très pédagogique, je ne fais aucune intervention mon fils est 100% autonome, je suis impressionnée par cette qualité merci pour cette lueur d'espoir",
    name: "La maman de Cyrine - Sousse",
  },
  {
    quote:
      "عجبتو ولدي التجربة و قعد يقرى وحدو الحمد لله، الحقيقة تجربة سمحة برشا مع منصة أتوم. ماصاب بدينا معاكم في أول العام، وزيد شاخ برحلة النجاح عمل عليها برشا جو. ماصاب تكملو السنوات الاخرى و ما نتحرموش.",
    name: "La maman de Majd - Gafsa",
  },
  {
    quote:
      "الحمد لله عاونتنا المنصة ،كل شيء  مستحقينو لقيناها فيها يعطيكم الصحة،  من فضلكم كملولنا السنة السابعة في أقرب وقت !",
    name: "La maman de Eya - Kairouan",
  },
];
const HomePage = () => {
  return (
    <>
      <div className="w-full flex flex-col lg:flex-row items-center justify-around flex-wrap mt-20 px-4 lg:px-0">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 mb-8 lg:mb-0"
        >
          <video autoPlay muted controls className="w-full rounded-xl">
            <source src={vid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/3 flex flex-col items-center"
        >
          <img
            className="block h-32 w-auto mb-4"
            src={logo}
            alt="e-boostacademy"
          />
          <span className="text-center lg:text-right text-gray-700">
            منهج مبتكر لنقل المعرفة منصة تعليمية تقدم دروس في جميع المواد
            الأساسية للأقسام من الثالثة إلى السادسة
          </span>
        </motion.div>
      </div>
      <div className="flex justify-center items-center w-full mt-24 pb-4">
        <h2 className=" font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-600 to-blue-800 ">
          من نحن
        </h2>
      </div>
      <About />
      <Stats />
      <motion.div
        initial="hidden"
        viewport={{ once: true }}
        whileInView="show"
        variants={fadeIn("up", "tween", 0.2, 0.7)}
        className="h-[20rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden"
      >
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </motion.div>
    </>
  );
};

export default HomePage;
