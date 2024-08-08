import React, { useContext, useEffect, useState } from "react";
import RequestCard from "../Components/RequestCard";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { UserContext } from "../Context/user-context";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Requests = () => {
  const [requests, setRequest] = useState(null);
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const getRequests = async () => {
      // Getting all request
      const requestResponse = (
        await axios.get(
          "https://ecoproject-aacab-default-rtdb.firebaseio.com/reservation.json"
        )
      ).data;

      // Filtering to my request
      const myRequest = requestResponse.filter(
        (r) => r.userId.toString() === currentUser.id
      );
      setRequest(myRequest);
    };

    getRequests();
  }, []);

  if (!currentUser) {
    return navigate("/");
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow flex flex-col justify-center items-center my-10">
        <header className="text-center mb-8">
          <h1 className="text-3xl text-sky-800 font-bold mb-10">
            Mis Solicitudes
          </h1>
        </header>
        <div>
          {requests &&
            requests.map((request, index) => (
              <RequestCard
                key={index}
                id={request.userId + request.protectedAreaID} // Pasamos el ID para la edición
                title={request.title}
                date={request.reservationDate}
                status={request.status}
                image={request.image}
              />
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Requests;
