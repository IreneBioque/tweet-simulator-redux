export const validationFormAddTweetAction = state => {
    return {
        // Con el type conectamos esta accion con el caso de reducer
        type: "VALIDATION_FORM_ADD_TWEET",
        payload: state
    }
}