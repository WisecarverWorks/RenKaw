import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Container } from "react-bootstrap";
// import { Link } from "react"

import "./HomePage.css";
import "../AdminPage/AdminPage";
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
    <Container >    
      
      <header>RENNIE TILLIS ARTWORK</header>
        <h1>HOMEPAGE</h1>
      
        <table>The HomePage is where all customers can see new art that is being sold, as well as any bulletins or assessments posted by an admin.  </table>
          <th>MISSION</th>
          <dl></dl>
        
    
    </Container>
  );
};

export default HomePage;
