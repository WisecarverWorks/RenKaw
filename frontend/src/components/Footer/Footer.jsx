import React from 'react';
// import { Button, Container } from "semantic-ui-react";
// import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <footer>
        <form>

        <label for="'routing">Links
        <select name="links" id="links">
          <option value="Google Drive">Google Drive</option><link to='https://drive.google.com/drive/folders/1epUiV6uJDu5LKwNV7gQeLuwK41G4BXNP?usp=sharing'/>
          <option value="Home">Home</option><link to='../../pages/HomePage'/>
          <option value="Assessment">Assessments</option><link to='../../pages/AssessmentPage'/>
          <option value="Portfolio">Portfolio</option><link to='../../pages/BuisnessPortfolioPage'/>
        </select>
        </label>
        <button type='submit'>GO</button>
        </form>
      </footer>
    </div>
  );
};

export default Footer;
