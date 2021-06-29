import React from "react";

const Button = ({ label, ...props }) => {
  return (
    <button
      className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-4 mx-1 sm:rounded-l"
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
