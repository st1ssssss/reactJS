import Home from "./Home"
import { store } from "../store"
import { actions } from "../store/Profile/actions"
import { useCallback } from "react"
import { useSelector, useDispatch } from "react-redux"

function Profile() {

    const dispatch = useDispatch()
    const { showName, name } = useSelector((state) => state)
    const setShowName = useCallback(() => {
        dispatch(actions)
    }, [dispatch])

    return (
        <div>
            <Home />
            <span><h1>Profile</h1></span>
            {showName && <div>{name}</div>}
            <input type="checkbox" value={showName} checked={showName} onChange={setShowName} />
        </div>

    )
}

export default Profile