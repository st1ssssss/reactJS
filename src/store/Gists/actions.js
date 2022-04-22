import { API_URL_PUBLIC } from "../../Components/Gists"

export const STATUSES = {
    IDLE: 0,
    REQUEST: 1,
    SUCCESS: 2,
    FAILURE: 3,
}
export const GET_GISTS_SUCCESS = 'GISTS::GET_GISTS_SUCCESS'
export const GET_GISTS_FAILURE = 'GISTS::GET_GISTS_FAILURE'
export const GET_GISTS_REQUEST = 'GISTS::GET_GISTS_REQUEST'

export const getGistsRequest = () => ({
    type: GET_GISTS_REQUEST
})
export const getGistsFailure = (err) => ({
    type: GET_GISTS_FAILURE,
    payload: err
})
export const getGistsSuccess = (gists) => ({
    type: GET_GISTS_SUCCESS,
    payload: gists
})

export const getAllGists = () => async (dispatch) => {

    dispatch(getGistsRequest())

    try {
        const response = await fetch(API_URL_PUBLIC)

        if (!response.ok) throw new Error(`Request failed with status ${response.status}`)

        const result = await response.json()


        dispatch(getGistsSuccess(result))
    } catch (error) {
        dispatch(getGistsFailure(error.message))
    }


}