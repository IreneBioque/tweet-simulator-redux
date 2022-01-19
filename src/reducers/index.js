// va a englobar todos los reduces de la aplicación

import {combineReducers} from 'redux';

import modalsReducer from './modalsReducer';
import validationsReducer from './validationsReducer';


// se combinan todos para luego exportar solo 1 
export default combineReducers({
    modals: modalsReducer,
    validations: validationsReducer,
})