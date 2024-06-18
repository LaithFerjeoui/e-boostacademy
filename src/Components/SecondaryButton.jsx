import React from "react";

const SecondaryButton = ({text}) => {
  return (
    <button
      type="button"
      className="rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
    >
      {text}
    </button>
  );
};

export default SecondaryButton;
