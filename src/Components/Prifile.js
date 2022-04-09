import Home from "./Home"
import { changeName } from "../store/Profile/actions"
import { useCallback, useState } from "react"
import { useSelector, useDispatch } from "react-redux"

function Profile() {

    const dispatch = useDispatch()

    const [value, setValue] = useState('')
    const { name } = useSelector((state) => state.profile)

    const handleChange = useCallback((e) => {
        setValue(e.target.value)
    }, [])

    const setName = useCallback(() => {
        dispatch(changeName(value))
    }, [dispatch, value])



    return (
        <div>
            <Home />
            <span><h1>Profile</h1></span>
            {name}
            <input type="text" value={value} onChange={handleChange} />
            <button onClick={setName}>Set New Name</button>
        </div>

    )
}

export default Profile