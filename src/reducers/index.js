// va a englobar todos los reduces de la aplicación

import {combineReducers} from 'redux';

import modalsReducer from './modalsReducer';


// se combinan todos para luego exportar solo 1 
export default combineReducers({
    modals: modalsReducer,
})