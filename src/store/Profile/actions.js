const CHANGE_PROP_SHOWNAME = 'CHANGE_PROP_SHOWNAME'
const CHANGE_NAME = "PROFILE::CHANGE_NAME"

export const actions = {
    type: CHANGE_PROP_SHOWNAME,
    type: CHANGE_NAME
}

export const changeName = (newName) => ({
    type: CHANGE_NAME,
    payload: newName
})