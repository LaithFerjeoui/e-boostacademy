const Cards = ({ title, price, description, details }) => {
  return (
    <div className="rounded-lg shadow-secondary-1 w-[350px] h-[450px] flex flex-col mt-4 shadow-xl hover:scale-105 duration-200">
      <div className="h-1/2 bg-indigo-400 flex flex-col justify-center h-[160px] items-center p-4">
        <h3 className="text-white text-lg font-bold">{title}</h3>
        <h3 className="text-white text-4xl font-bold mt-2">{price}</h3>
        <p className="mt-4 text-base text-center text-white font-normal">
          {description}
        </p>
      </div>
      <div className="h-1/2 bg-gray-50 justify-center items-center p-4">
        <ul className="text-base text-center text-gray-800 font-normal">
          {details.map((detail, index) => (
            <li key={index} className="flex items-center justify-between mb-2">
              <span className="flex-1 text-end">{detail}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center mt-6 ">
        <button className="bg-indigo-400 text-white rounded-lg px-2 pt-2 pb-2 mb-4 ml-2 hover:bg-gray-100 hover:text-gray-600 w-full">
          اشترك الآن
        </button>
      </div>
    </div>
  );
};

export default Cards;
