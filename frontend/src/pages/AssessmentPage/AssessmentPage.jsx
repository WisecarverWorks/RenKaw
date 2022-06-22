// Imports
import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import DisplayPosts from '../../components/DisplayPosts/DisplayPosts';
import CreatePost from '../../components/CreatePost/CreatePost';


    const AssessmentPage = () => {
    const [posts, setPosts] = useState([]);
  
    function createPost(myPost) {
      let allPosts = [...posts, myPost];
      setPosts(allPosts);
    }
    // retrun a div containing the following 
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
// export our BulletinPage
export default AssessmentPage;