import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../UI/PrimaryButton";

const NewsArticle = ({ news }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <img
        src={news.image}
        alt={news.title}
        className="h-48 w-full object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-bold mb-2">{news.title}</h3>
      <p className="text-gray-600 mb-4">{news.summary}</p>
      <p className="text-gray-600 mb-4">{news.details}</p>
      <Link to={`/${news.link}`} className="text-blue-500 hover:underline">
        <PrimaryButton>Leer más</PrimaryButton>
      </Link>
      <p className="text-gray-500 mt-2">{news.date}</p>
    </div>
  );
};

export default NewsArticle;
