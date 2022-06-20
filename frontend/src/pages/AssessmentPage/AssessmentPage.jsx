import React, { useState } from "react";
import DisplayPosts from "../../DisplayPosts/DisplayPosts";
import CreatePost from "../../CreatePost/CreatePost";
import { Container, Row, Col } from "react-bootstrap";


function AssessmentPage() {
  const [posts, setPosts] = useState([]);

  function createPost(myPost) {
    let allPosts = [...posts, myPost];
    setPosts(allPosts);
  }
  // return a div containing 
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            {" "}
            <CreatePost createPost={createPost} />
          </Col>
          <Col>
            {" "}
            <DisplayPosts posts={posts} />{" "}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
// export our app 
export default AssessmentPage;