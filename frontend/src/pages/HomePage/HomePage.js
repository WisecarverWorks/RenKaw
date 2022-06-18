import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

import axios from "axios";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [art, setArt] = useState([]);

  useEffect(() => {
    const fetchArt = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/artcollection/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setArt(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchArt();
  }, [token]);
  return (
    <div className="container">
      <h1>Home Page for {user.username}!</h1>
      {art &&
        art.map((art) => (
          <p key={art.id}>
            {art.title} {art.price} {art.time}
          </p>
        ))}
        <Link to="/register">Click to register!</Link>
        <Link to="/assessment">Click to assessments!</Link>
        <Link to="/bpp">Click to bulletin!</Link>
    </div>
  );
};

export default HomePage;
