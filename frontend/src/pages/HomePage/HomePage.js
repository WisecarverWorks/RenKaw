import React from "react";
// import { Container } from "semantic-ui-react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
// import { Link } from "react-router-dom";
import { Container } from "semantic-ui-react";
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
    <Container class="ui grid">
       <h1>Home Page for {user.username}!</h1>
        {art &&
          art.map((art) => (
            <p key={art.id}>
              {art.title} {art.price} {art.time}
            </p>
          ))}
      <Container class="three column row">
        <Container class="column">
           <image url="../../component<images/ralph.jpg" class="u<image"/>
        </Container>
        <Container class="column">
          <image url="../../component<images/ralph.jpg" class="u<image"/>
        </Container>
        <Container class="column">
          <image url="../../component<images/ralph.jpg" class="u<image"/>
        </Container>
      </Container>
      <Container class="four column row">
          <Container class="column">
            <image url="../../component<images/ralph.jpg" class="u<image"/>
          </Container>
          <Container class="column">
            <image url="../../component<images/ralph.jpg" class="u<image"/>
          </Container>
          <Container class="column">
            <image url="../../component<images/ralph.jpg" class="u<image"/>
          </Container>
          <Container class="column">
            <image url="../../component<images/ralph.jpg" class="u<image"/>
          </Container>
      </Container>
      <Container class="five column row">
        <Container class="column">
          <image url="../../component<images/ralph.jpg" class="u<image"/>
        </Container>
        <Container class="column">
          <image url="../../component<images/ralph.jpg" class="u<image"/>
        </Container>
        <Container class="column">
          <image url="../../component<images/ralph.jpg" class="u<image"/>
        </Container>
        <Container class="column">
          <image url="../../component<images/ralph.jpg" class="u<image"/>
        </Container>
        <Container class="column">
          <image url="../../component<images/ralph.jpg" class="u<image"/>
        </Container>
    </Container>
  </Container>

  );
};

export default HomePage;
