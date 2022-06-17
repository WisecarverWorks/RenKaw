import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react"

import axios from "axios";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [artwork, setArtwork] = useState([]);

  useEffect(() => {
    const fetchArtwork = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/artwork/", {
          headers: {
            Authorization: "Allow any",
          },
        });
        setArtwork(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchArtwork();
  },);

  
  return (
    <div className="container">
      <h1>{user.username} Welcome to your HomePage!</h1>
      {artwork &&
        artwork.map((artworks) => (
          <p key={artworks.id}>
            {artworks.sets} {artworks.title} {artworks.price}
          </p>
        ))}
    </div>
  );
};

export default HomePage;