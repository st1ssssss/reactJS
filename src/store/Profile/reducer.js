const initialState = {
    showName: false,
    name: 'Default'
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_PROP_SHOWNAME':
            return {
                ...state,
                showName: !state.showName
            }

        default:
            return state
    }

}