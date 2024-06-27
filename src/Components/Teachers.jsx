import t1 from "../../public/images/t1.jpeg";
import t2 from "../../public/images/t2.jpeg";
import t3 from "../../public/images/t3.jpeg";
const people = [
  {
    name: "محمد العلي",
    role: "أستاذ الرياضيات",
    imageUrl: t1,
  },
  {
    name: "علي يوسف",

    role: "أستاذة العلوم",
    imageUrl: t2,
  },
  {
    name: "فاطمة أحمد",
    role: "أستاذ اللغة العربية",
    imageUrl: t3,
  },
];

export default function Teachers() {
  return (
    <div className="bg-gray-100 py-24 sm:py-32 ">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
            اساتذتنا
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-400">
            لدينا أفضل الاساتذة{" "}
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
        >
          {people.map((person) => (
            <li
              key={person.name}
              className="rounded-2xl bg-gray-800 px-8 py-10 hover:scale-105 duration-200"
            >
              <img
                className="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56"
                src={person.imageUrl}
                alt=""
              />
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-white">
                {person.name}
              </h3>
              <p className="text-sm leading-6 text-gray-400">{person.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
