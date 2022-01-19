const initialProps = {
    tweets: []
}

export default function tweetReducer(state = initialProps, action) {
    switch (action.type) {
        case "ADD_TWEET":
            return {
                ...state,
                // el nuevo tweet viene en el payload del action
                tweets: [...state.tweets, action.payload]
            }
            default:
                return state;
    }
}