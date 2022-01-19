// Esta acción abrirá y cerrará el modal dependiendo de la acción que le mandemos

export const openCloseAddTweetModalAction = state => {
    return {
        // Caso del switch de modal reduce. Hay que poner el mismo nombre
        type: "STATE_ADD_TWEET_MODAL",
        payload: state
    }
        
    
}