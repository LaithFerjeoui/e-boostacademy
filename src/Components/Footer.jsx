import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import logo from "../../public/logo.png";
import { motion } from "framer-motion";
import { IoLocationSharp } from "react-icons/io5";
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
const navigation = {
  support: [
    { name: "إكتشف", href: "#" },
    { name: "عروضنا", href: "#" },
    { name: "محتوانا", href: "#" },
  ],
  company: [
    { name: "إنشاء حساب", href: "#" },
    { name: "فضاء التلميذ", href: "#" },
    { name: "فضاء الولي", href: "#" },
  ],
  legal: [
    { name: "الرئيسية", href: "#" },
    { name: "من نحن", href: "#" },
    { name: "شروط الإستخدام", href: "#" },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: <FaFacebook size={22} color="blue" />,
    },
    {
      name: "Instagram",
      href: "#",
      icon: <FaInstagram size={22} color="purple" />,
    },
    {
      name: "WhatsApp",
      href: "#",
      icon: <FaWhatsapp size={22} color="green" />,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <motion.div
        initial="hidden"
        viewport={{ once: true }}
        whileInView="show"
        variants={fadeIn("up", "tween", 0.2, 0.7)}
        className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32 m"
      >
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 mx-auto">
            <img className="h-16 mx-auto" src={logo} alt="e-boostAcademy" />
            <a href="https://www.google.com/maps/place/RHQV%2BHMM+E-Boost+Academy,+Rue+de+la+Turquie,+Sousse+4054/@35.8406201,10.5938847,16z/data=!4m6!3m5!1s0x12fd8b00669f8da9:0x84ac5d07dcb76c88!8m2!3d35.8389021!4d10.5941161!16s%2Fg%2F11y479r3rf" className="flex justify-center items-center gap-2 p-1 border border-gray-500 rounded-full hover:scale-105 duration-200">
             
              <span className="font-bold text-lg text-gray-600">العنوان</span>
              <IoLocationSharp className="text-gray-600" size={20} />
            </a>
            <div className="flex justify-center ">
              <p className="text-md font-bold leading-6 text-gray-600 ">
               : تواصل معنا
              </p>
            </div>

            <div className="flex justify-center space-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className=" h-6 w-6 hover:scale-105 duration-150"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:col-span-2 xl:col-span-1 mx-auto">
              <div className="mt-10 md:mt-0 ">
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:col-span-1 mx-auto">
              <ul role="list" className="mt-6 space-y-4">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-1 mx-auto">
              <ul role="list" className="mt-6 space-y-4">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24 text-center">
          <p className="text-xs leading-5 text-gray-500">
            &copy; 2024 E-BoostAcadamy, Inc. All rights reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
