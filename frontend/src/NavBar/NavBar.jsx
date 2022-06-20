// import needed dependencies
import './NavBar.css';
import React from 'react';
import { Navbar } from 'react-bootstrap';

const NavBar = (props) => {
    return (
        <Navbar bg="info" variant="dark">
            <h3><small className="text-musted">Social</small>Feed</h3>
        </Navbar>
    );
}
// export our Navbar prop
export default NavBar;