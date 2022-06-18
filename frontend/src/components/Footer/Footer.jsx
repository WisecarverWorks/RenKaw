import React from 'react';
import { Button, Container } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      
      <footer>
      <Container>
        <Button ><Link path="/home"></Link>Home</Button>
        <Button ><Link  path="/assessment"></Link>Quiz</Button>
        <Button ><Link to="/bpp"></Link>Porftolio</Button>
      </Container>
      </footer>
      
    </div>
  );
};

export default Footer;
