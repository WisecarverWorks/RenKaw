import React from "react";
import { Container } from 'react-bootstrap';
// import AssessmentPage from "../AssessmentPage/AssessmentPage";
// import CreatePost from '../../CreatePost/CreatePost';
// import DisplayPosts from '../../DisplayPosts/DisplayPosts';
import AssessmentPage from "../AssessmentPage/AssessmentPage";
  
const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage

  return (
    <Container>
      <header>
        <h1>-Test-Home-</h1></header>
          <body>HELLO
            <div className="container" >
              <div className="row" >
                <div className="col-sm" >
                  <label>
                    Create Assessment</label>
                    <AssessmentPage />
                      <div className="col-sm">
                        <label>Display Assessment</label>
                      </div>
                  </div>
              </div>
          </div>
      </body>
      <footer>
      </footer>
    </Container>

  );
};

export default HomePage;
