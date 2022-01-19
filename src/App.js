
import React from "react";
import { Container } from 'react-bootstrap'
import Menu from './components/Menu'

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
    </Provider>
  );
}

export default App;
