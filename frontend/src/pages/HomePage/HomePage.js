import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Container, Dropdown, Button } from "react-bootstrap";
// import { Link } from "react"

import "./HomePage.css";
import "../AdminPage/AdminPage";
import axios from "axios";


const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/cars/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setCars(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchCars();
  }, [token]);

  return (
    <Container>    
      
      <header>RENNIE TILLIS ARTWORK</header>
        <h1>HOMEPAGE</h1>
      
        <table>The HomePage is where all customers can see new art that is being sold, as well as any bulletins or assessments posted by an admin.  </table>
          <th>MISSION</th>
            <tr>Create a list of links that we can use to not only use but showcase the Application</tr>
            <tb>
            <tr><medium>The list of links should be here</medium></tr>
              <li>
                <Dropdown>
                  <Button onclick="homepage.location='../HomePage/HomePage'">HomePage</Button>
                  <Button onclick="adminpage.location='../AdminPage/AdminPage'">AdminPage</Button>
                </Dropdown>
              </li>
            </tb>
    
    </Container>
  );
};

export default HomePage;
