import React from "react";
// ponemos un nombre distinto porque si no choca con el nombre del componente
import { Modal as ModalB} from "react-bootstrap";
// useSelector para acceder a un valor del estado del modal
import { useDispatch, useSelector } from "react-redux";
import { openCloseAddTweetModalAction } from '../actions/modalsActions';

export default function Modal (props) {
    const {children} = props;

    // Dispath para ejecutar nuestras acciones
    const dispatch = useDispatch();
    // Es igual que la que hay en menu, pero usando useSelector para acceder al valor del estado
    const closeModal = state => dispatch(openCloseAddTweetModalAction(state));
    
    // accedemos a un valor en el store con useSelector. Sacamos el estado de nuestro store y nos traemos el stateModalAddTweet
    // state nos devuelve todo el estado, state.modals nos devuelve un objeto
    const isOpenModal = useSelector(state => state.modals.stateModalAddTweet);

    return (
       <ModalB
       // Nos abre el modal porque le pasamos el valor true
       show={isOpenModal}
       // le paso el valor de false
       onHide={() => closeModal(false)}
       size="lg"
       centered
       > 
           {children}
       </ModalB>
    )
}