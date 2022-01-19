

const initialProps = {
    // Modal cerrado por defecto
    stateModalAddTweet: false,
}

// Recibe un estado, y si no lo recibe, initialProps por defecto y una acción
export default function modalsReducer (state = initialProps, action){
    // los reduces con un switch
    // el action le decimos que reducer tiene que ejecutar
    switch (action.type){
        // El caso siempre en mayuscula y minimo 2 palabras
        case "STATE_ADD_TWEET_MODAL":
            return {
                // devuelve el estado y añadir lo nuevo. Payload es el valor que toma el nuevo estado ( devuelve un booleano)
                ...state,
                stateModalAddTweet: action.payload
            }
         default:{
            // devuelve el estado tal y como esté
            return {
                ...state
            }
         }
          
                
    }
}