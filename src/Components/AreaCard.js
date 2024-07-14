import React from "react";

const AreaCard = ({ area }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <img src={area.imgUrl} alt={area.name} className="h-48 w-full object-cover rounded-lg mb-4" />
      <h3 className="text-xl font-bold mb-2">{area.name}</h3>
      <p className="text-gray-600 mb-4">{area.description}</p>
      <button className="btn-primary text-white py-2 px-4 rounded-lg hover:bg-green-600 transition">
        Solicitar
      </button>
    </div>
  );
};

export default AreaCard;
