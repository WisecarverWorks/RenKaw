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
            <CreatePost createPost={createPost}  />
            <p>Lorem ipsum dolor sit amet consequat nibh si. Pede fringilla ut inceptos congue sollicitudin tellus pulvinar enim nec. Commodo a nisi sociosqu proin congue justo tempor ultrices. Suspendisse massa tellus sagittis nisl odio efficitur curabitur enim.</p>
            <table>
              <h3>New Table</h3>
                <tr>Will Display</tr>
                <tr>
                 <tb>
                  <p><body>
            <p>Lorem ipsum dolor sit amet consequat nibh si. Pede fringilla ut inceptos congue sollicitudin tellus pulvinar enim nec. Commodo a nisi sociosqu proin congue justo tempor ultrices. Suspendisse massa tellus sagittis nisl odio efficitur curabitur enim. Sit neque elementum ultricies hac venenatis. Consectetuer massa porttitor habitasse pretium eleifend magnis pellentesque suscipit pharetra vitae. Nascetur dui nec nunc fermentum tellus curae laoreet. Cursus pede diam elit in quam adipiscing curabitur.

            Conubia consectetuer fames torquent vestibulum cursus ipsum. Mollis eu et augue primis himenaeos pulvinar. Suspendisse egestas amet donec eu integer lacinia. Eget nisl nunc felis enim iaculis. A mi nisl morbi odio orci primis iaculis habitasse sem mollis lobortis. Accumsan condimentum imperdiet duis platea volutpat ullamcorper. Lectus suspendisse nulla et ridiculus venenatis. Letius si sodales class erat ullamcorper elit nullam facilisi dapibus.</p>
          </body></p>
                 </tb>
                </tr>
            </table>
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