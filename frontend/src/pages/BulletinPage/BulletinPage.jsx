// Imports
import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import DisplayPosts from '../../components/DisplayPosts/DisplayPosts';
import CreatePost from '../../components/CreatePost/CreatePost';


    const BulletinPage = () => {
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
            <h3>Output of the Rich Text Editor</h3>
            <p>Will Go HERE</p>
            {" "}
            <CreatePost createPost={createPost} />
            <h3>These are tips on communication</h3>
            <p>Lorem ipsum dolor sit amet quisque sodales. Laoreet montes integer ante ullamcorper interdum commodo suspendisse. Dapibus euismod hac ac senectus dictum lacus morbi. Primis     dignissim vehicula pellentesque litora magnis donec arcu non tincidunt inceptos netus. Laoreet class ridiculus netus ultrices litora. Inceptos venenatis suscipit pede convallis vestibulum commodo consectetuer.

            Fermentum erat tempus sollicitudin congue maximus. Finibus ante cubilia scelerisque praesent lacinia habitasse lorem sed odio taciti. Nullam sem posuere magna facilisi purus leo hendrerit nulla. Himenaeos accumsan venenatis nullam pellentesque eu faucibus in amet nascetur. Class massa libero platea erat suspendisse facilisis.</p>
          </Col>
          <Col>
            {" "}
            <DisplayPosts posts={posts} />{" "}
            <h3>Here wIwill be where we show our bulletin feedback</h3>
            <p>Lorem ipsum dolor sit amet quisque sodales. Laoreet montes integer ante ullamcorper interdum commodo suspendisse. Dapibus euismod hac ac senectus dictum lacus morbi. Primis     dignissim vehicula pellentesque litora magnis donec arcu non tincidunt inceptos netus. Laoreet class ridiculus netus ultrices litora. Inceptos venenatis suscipit pede convallis vestibulum commodo consectetuer.

            Fermentum erat tempus sollicitudin congue maximus. Finibus ante cubilia scelerisque praesent lacinia habitasse lorem sed odio taciti. Nullam sem posuere magna facilisi purus leo hendrerit nulla. Himenaeos accumsan venenatis nullam pellentesque eu faucibus in amet nascetur. Class massa libero platea erat suspendisse facilisis.</p>
          </Col>
        </Row>
      </Container>
    </div>
    );
}
// export our BulletinPage
export default BulletinPage;