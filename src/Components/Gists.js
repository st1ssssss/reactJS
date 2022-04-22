import { useEffect, useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { CircularProgress } from "@mui/material"
import { getAllGists } from "../store/Gists/actions"
import { gistsErrorSelector, gistsLoadingSelector, gistsSelector } from "../Selectors"

export const API_URL_PUBLIC = "https://api.github.com/gists/public"


export const Gists = () => {
    const dispatch = useDispatch()

    const gists = useSelector(gistsSelector)
    const loading = useSelector(gistsLoadingSelector)
    const error = useSelector(gistsErrorSelector)



    const requestGists = () => {
        dispatch(getAllGists())
    }


    const renderGist = useCallback((gist) => <li key={gist.id}>{gist.description || 'No description'}</li>, [])

    useEffect(() => {
        requestGists()
    }, [])

    if (loading) return <CircularProgress />

    if (error) {
        return (
            <>
                <h3>Error</h3>
                <button onClick={requestGists}>Retry</button>
            </>
        )
    }

    return <ul>{gists.map(renderGist)}</ul>
}