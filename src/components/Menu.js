import React from "react";
import { Container, Navbar, Button } from 'react-bootstrap'
import logo from '../images/redux.png'

function Menu () {
  return (
    <Navbar bg='dark' variant="dark" >
    <Container >
        <Navbar.Brand>
        <img src={logo} alt='logoRedux' width="30" height="30"
        className="d-inline.block align-top mr-4" />
        Tweets simulator Redux
        </Navbar.Brand>
    <Button variant="outline-success" >Nuevo Tweet</Button>
    </Container>

    </Navbar>

  );
}

export default Menu;
