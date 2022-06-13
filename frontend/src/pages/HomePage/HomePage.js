import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";


import axios from "axios";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [ren, setRen] = useState([]);

  useEffect(() => {
    const fetchRen = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/ren/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setRen(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchRen();
  }, [token]);
  return (
    
    <div className="container">
     <body>
      <h5>Home Page for {user.username}!</h5>
      {ren &&
        ren.map((art) => (
          <p key={art.id}>
            {art.year} {art.title} {art.price}
          </p>
        ))}
     </body>
    </div>
  );
};

export default HomePage;
