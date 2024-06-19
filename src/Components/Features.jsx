import React from "react";

const features = () => {
  const stats = [
    { id: 1, image: "book", value: "محتوى مميز و فريد" },
    { id: 2, image: "book", value: "منصة سهلة الإستعمال" },
    { id: 3, image: "book", value: "محتوى مطابق للبرنامج الرسمي التونسي" },
  ];
  return (
    <div className="flex justify-center">
      <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-3 items-center justify-between">
        {stats.map((stat) => (
          <div key={stat.id} className="flex flex-col bg-gray-400/5 p-8">
            <img className="h-60 w-60 mx-auto rounded-full" src={`./${stat.image}.jpg`} />
            <dd className="mt-4 text-3xl font-semibold tracking-tight text-gray-700">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
};
export default features;
