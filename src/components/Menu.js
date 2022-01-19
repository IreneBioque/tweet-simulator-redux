import React from "react";
import { Container, Navbar, Button } from 'react-bootstrap'
//Hook. Para poder ejecutar accciones
import { useDispatch } from "react-redux";
// La acción que hemos programado
import { openCloseAddTweetModalAction } from '../actions/modalsActions'
import logo from '../images/redux.png'

function Menu () {

  //  Dispatch para ejecutar nuestras acciones
  const dispatch = useDispatch();

  // le paso el estado, ejecuta acción con dispatch, le paso mi acción y a esta el estado del modal (true o false)
  const openCloseAddTweetModal = state => dispatch(openCloseAddTweetModalAction(state));
// le cambio el estado a la acción a true
  const openModal = () => {
    openCloseAddTweetModal(true);
  }

  return (
    <Navbar bg='dark' variant="dark" >
    <Container >
        <Navbar.Brand>
        <img src={logo} alt='logoRedux' width="30" height="30"
        className="d-inline.block align-top mr-4" />
        Tweets simulator Redux
        </Navbar.Brand>
    <Button variant="outline-success" onClick={openModal}>Nuevo Tweet</Button>
    </Container>

    </Navbar>

  );
}

export default Menu;
