import React from "react";

const PrimaryButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="py-2 px-4 bg-sky-900 text-white rounded-lg"
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
