import { GET_GISTS_FAILURE, GET_GISTS_REQUEST, GET_GISTS_SUCCESS, STATUSES } from "./actions";

const initialState = {
    gists: [],
    request: STATUSES.IDLE,
    error: null,
    loading: true
}

export const gistsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_GISTS_FAILURE:
            return {
                ...state,
                request: STATUSES.FAILURE,
                error: action.payload,
                loading: false
            }

        case GET_GISTS_SUCCESS:
            return {
                ...state,
                request: STATUSES.SUCCESS,
                gists: action.payload,
                error: null,
                loading: false
            }

        case GET_GISTS_REQUEST:
            return {
                ...state,
                request: STATUSES.REQUEST,
                loading: true
            }

        default:
            return state;
    }
}