import React from "react";
import { Link } from "react-router-dom";

const AreaCard = ({ area }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between">
      <div>
        <img
          src={area.url}
          alt={area.name}
          className="h-48 w-full object-cover rounded-lg mb-4"
        />
        <h3 className="text-xl font-bold mb-2">{area.name}</h3>
      </div>
      <p className="text-gray-600 mb-4">{area.description}</p>
      <Link
        to={`/lugares-turisticos/${area.id}`}
        className="btn-primary w-fit text-white bg-sky-900 py-2 px-4 rounded-lg hover:bg-green-600 transition"
      >
        Solicitar
      </Link>
    </div>
  );
};

export default AreaCard;
