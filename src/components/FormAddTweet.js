import React, {useState, } from "react";
import { Form, Button, Alert } from "react-bootstrap";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { validationFormAddTweetAction } from "../actions/validationsAction";

export default function FormAddTweet() {
    // Guardamos los valores en los etados locales del componente para no darle carga a redux. Cosas sencillas = locales, cosas mas complicadas = estados de redux
    const [formValue, setFormValue] = useState({
        name: "",
        tweet: ""
    });

    // Inicialización del dispatch
    const dispatch = useDispatch();
    // Ejecución de las acciones
    const errorForm = state => dispatch(validationFormAddTweetAction(state));

    // Obtener estado de la validación del formulario
    const errorFormValue = useSelector(state => state.validations.errorFormAddTweet)

    const onChange = (e) => {
        setFormValue({
            ...formValue, 
            // accedemos al valor name de cada input y le pasamos el valor ¿Renombramos el name de cada input por su valor?
            [e.target.name]: e.target.value
            
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const {name, tweet} = formValue;
        if(!name || !tweet){
            errorForm(true)
            console.log('Todos los campos son obligatorios')
        } else {
            // El formulario se envia correctamente al pasar el error a false
            errorForm(false)
            console.log('Tweet enviado correctamente')
        }
    }

    return (
        <Form className="m-3" onChange={onChange} onSubmit={onSubmit}>
            <Form.Group className="text-center" >
                <h1>Nuevo Tweet</h1>
            </Form.Group>
            <Form.Group className="text-center" >
                <Form.Control className="mb-3" type="text" name="name" placeholder="Escribe tu nombre"/>
            </Form.Group>
            <Form.Group className="text-center" >
                <Form.Control 
                className="mb-3" 
                as="textarea"
                name= "tweet"
                row="3"
                placeholder="Escribe lo que quieres comunicar"/>
            </Form.Group>
            <Button variant="primary" type="submit"className="mb-3"  > Enviar Tweet </Button>
            {errorFormValue && (
                <Alert variant="danger" className="mt-4"  >
                    Todos los campos son obligatorios
                </Alert>
            )}
        </Form>
    )
}