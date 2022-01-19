
import React from "react";
import { Container } from 'react-bootstrap'
import Menu from './components/Menu'
import Modal from "./components/Modal";

// Redux

import store from "./store";
import {Provider} from "react-redux"

function App() {
  return (
    // Así se tiene acceso a la store desde cualquier componente de la aplicación
    <Provider store={store} >
    <Menu />
    <Container className="mt-5" >
      <h1 className="text-center" >TWEETS</h1>
    </Container>
    <Modal>
      Form para añadir nuevo Tweet
    </Modal>
    </Provider>
  );
}

export default App;
