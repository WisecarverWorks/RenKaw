import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";


const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [members, setMembers] = useState([]);
////////////////////////////////////////////////////  HELP!
  useEffect(() => {
    const fetchMember = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/artwork/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setMembers(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchMember();
  }, [token]);
  return (
    <div className = "container" >
      {/* <h1>Welcome {user.username}!</h1> */}
       {/* <h2>-MEMBER-TEST-PAGE-</h2> */}
        {members &&
          members.map((member) => (
          <p key={member.id}>
            {member.memberId} {member.firstName} {member.lastName}
          </p>
        ))} 
    </div>
  );
};

export default HomePage;

