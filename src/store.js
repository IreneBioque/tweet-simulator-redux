// Solo se puede tener un store

import { createStore } from 'redux'
import reducer from "./reducers"

const store = createStore(
    reducer, /* preloadedState, */
    // Con esto se muestra en la consola los errores
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
export default store;