

const initialState = {
    name: 'Default'
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'PROFILE::CHANGE_NAME':
            console.log(state)
            return {
                ...state,
                name: action.payload
            }
        default:
            return state
    }

}