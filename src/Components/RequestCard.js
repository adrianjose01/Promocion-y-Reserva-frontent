import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faClock } from '@fortawesome/free-solid-svg-icons';

const RequestCard = ({ title, date, status, image }) => {
  return (
    <div className="bg-white p-4 md:p-6 lg:p-10 drop-shadow-xl shadow-lg rounded-lg mb-6 md:mb-8 lg:mb-10 flex flex-col md:flex-row items-center">
      <div className="w-full md:w-80 h-48 mb-4 md:mb-0 overflow-hidden rounded-md">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="flex-grow md:ml-4">
        <h1 className="text-lg md:text-xl lg:text-2xl text-sky-900 font-semibold mb-2">{title}</h1>
        <div className="flex items-center text-xs md:text-sm lg:text-base text-gray-600 mb-2">
          <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
          <span>{date}</span>
        </div>
        <div className="flex items-center text-xs md:text-sm lg:text-base text-gray-600">
          <FontAwesomeIcon icon={faClock} className="mr-2" />
          <span>{status}</span>
        </div>
      </div>
      <button className={`px-3 py-1 mt-2 md:mt-0 ml-0 md:ml-2 rounded-full text-white ${status === 'ABIERTA' ? 'bg-sky-900' : 'bg-red-800'}`}>
        {status}
      </button>
    </div>
  );
};

export default RequestCard;
