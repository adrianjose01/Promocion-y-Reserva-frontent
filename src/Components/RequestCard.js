import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faClock,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

const RequestCard = ({ title, date, status, image, id }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentStatus, setCurrentStatus] = useState(status);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const changeStatus = (newStatus) => {
    setCurrentStatus(newStatus);
    setIsDropdownOpen(false);
  };

  const handleEditClick = (e) => {
    if (currentStatus === "CERRADA") {
      e.preventDefault();
    } else {
      navigate(`/editar-solicitud/${id}`);
    }
  };

  const isEditable = currentStatus === "ABIERTA";

  return (
    <div className="bg-white p-4 md:p-6 lg:p-10 drop-shadow-xl shadow-lg rounded-lg mb-6 md:mb-8 lg:mb-10 flex flex-col md:flex-row items-center">
      <div className="w-full md:w-80 h-48 mb-4 md:mb-0 overflow-hidden rounded-md">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="flex-grow md:ml-4">
        <h1 className="text-lg md:text-xl lg:text-2xl text-sky-900 font-semibold mb-2">
          {title}
        </h1>
        <div className="flex items-center text-xs md:text-sm lg:text-base text-gray-600 mb-2">
          <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
          <span>{date.toString().slice(0, 10)}</span>
        </div>
        <div className="flex items-center text-xs md:text-sm lg:text-base text-gray-600">
          <FontAwesomeIcon icon={faClock} className="mr-2" />
          <span>{currentStatus}</span>
        </div>
      </div>
      <div className="relative mt-2 md:mt-0 ml-0 md:ml-2">
        <p
          className={`px-3 py-1 rounded-full text-white flex items-center justify-between ${
            currentStatus === "ABIERTA"
              ? "bg-sky-900"
              : currentStatus === "APROBADA"
              ? "bg-green-700"
              : "bg-red-800"
          }`}
        >
          {currentStatus}
        </p>
      </div>
      <Link
        to={`/editar-solicitud/${id}`}
        className={`px-3 py-1 mt-2 md:mt-0 ml-0 md:ml-2 rounded-full text-white ${
          isEditable ? "bg-gray-600" : "bg-gray-400 cursor-not-allowed"
        }`}
        aria-disabled={!isEditable}
        onClick={handleEditClick}
      >
        ver detalles
      </Link>
    </div>
  );
};

export default RequestCard;
