import React from "react";

const PrimaryButton = ({ children }) => {
  return (
    <button className="py-2 px-4 bg-sky-900 text-white rounded-lg">
      {children}
    </button>
  );
};

export default PrimaryButton;
