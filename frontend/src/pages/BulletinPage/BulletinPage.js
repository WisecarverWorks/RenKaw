// Imports
import React, { useState } from 'react';
import Displaybulletins from "../../components/DisplayBulletins/DisplayBulletins";
import CreatePost from "../../components/CreateBulletin/CreateBulletin"
// import NavBar from "../../components/NavBar/NavBar"
import { Container, Row, Col } from "react-bootstrap";

import './BulletinPage.css'

function BulletinPage() {
    const [bulletins, setBulletin] = useState([]);

    function createPost(myBulletins) {
        let allbulletins = [...bulletins, myBulletins];
        setBulletin(allbulletins);
    }
    // retrun a div containing the following 
    return (
        <Container>
                <h2><small>Bulletin Post</small></h2>
                <Row>
                    <Col>
                    {""}
                    <CreatePost createPost={createPost} />
                    </Col>
               
                    <Col>
                    {""}
                    <Displaybulletins bulletins={bulletins} />
                    </Col>
                </Row>
            </Container>
    );
}
// export our BulletinPage
export default BulletinPage;