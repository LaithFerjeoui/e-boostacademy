import card1 from "../../public/images/card1.jpg";
import card2 from "../../public/images/card2.jpg";
import card3 from "../../public/images/card3.jpg";
import { motion } from "framer-motion";
const posts = [
  {
    id: 1,
    title: "دروس",
    description: "فيديوهات تفسير الدروس في كل المواد الدراسية",
    imageUrl: card3,
  },
  {
    id: 2,
    title: "تمارين",
    description:
      "دروس مطابقة للبرامج الرّسمية مترجمة في شكل فيديوهات تعتمد على أساليب تكنولوجيّة حديثة",
    imageUrl: card2,
  },
  {
    id: 3,
    title: "تقييمات",
    description:
      "دروس دعم مباشرة مع معلمين متميزين من أجل متابعة بيداغوجية و علمية مباشرة عبر تطبيق Zoom.",
    imageUrl: card1,
  },
];

export default function About() {
  return (
    <div className="bg-white ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post, i) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.6, y: -80 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5 * i }}
              key={post.id}
              className="relative bg-gray-900 rounded-2xl overflow-hidden"
            >
              <img
                src={post.imageUrl}
                alt={post.title}
                className="h-64 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white text-right">
                  {post.title}
                </h3>
                <p className="mt-4 text-gray-300 text-right">
                  {post.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
