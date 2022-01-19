// Solo se puede tener un store

import { createStore } from 'redux';
import reducer from "./reducers";
import {getStateLocalStorage, setStateLocalStorage} from './utils/localStorage'

 const localStorageState = getStateLocalStorage()

const store = createStore(
    reducer, /* preloadedState, */

    // así recuperamos los datos del ls
    localStorageState,
    
    // Con esto se muestra en la consola los errores
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  // para estar atentos a cualquier cambio de nuestro storage

  store.subscribe(() => {
    setStateLocalStorage({
      tweets: store.getState().tweets
    })
  })
export default store;