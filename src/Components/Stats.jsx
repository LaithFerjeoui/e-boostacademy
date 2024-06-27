import { motion } from "framer-motion";
const stats = [
  { name: "أساتذة ذوي الخبرة", value: "+50" },
  { name: "تلميذ مشارك معنا", value: "+400",  },
  { name: "حصص مباشرة شهريا", value: "+450" },

];
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
export default function Stats() {
  return (
    <motion.div
          initial="hidden"
          viewport={{ once: true }}
          whileInView="show"
          variants={fadeIn("up", "tween", 0.2, 0.7)}
         className="bg-blue-200 my-16 rounded-lg max-w-7xl mx-auto">
      <div className="mx-auto max-w-7xl ">
        <div className="grid grid-cols-1 gap-px bg-white/20 sm:grid-cols-1 lg:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.name}
              className="bg-blue-500 px-4 py-6 sm:px-6 lg:px-8 rounded-lg text-center my-1 mx-3"
            >
              <p className="text-sm font-medium leading-6 text-gray-200">
                {stat.name}
              </p>
              <p className="mt-2 flex justify-center items-baseline gap-x-2">
                <span className="text-4xl font-semibold tracking-tight text-white text-right">
                  {stat.value}
                </span>
                
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
