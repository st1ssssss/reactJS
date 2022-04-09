const ADD_NEW_CHAT = 'DIALOGS::ADD_NEW_CHAT'
const DELETE_CHAT = 'DIALOGS::DELETE_CHAT'



export const addNewDialog = (idChat, name) => ({
    type: ADD_NEW_CHAT,
    payload: {
        idChat: idChat,
        name: name
    }
})

export const deleteDialog = (idChat) => ({
    type: DELETE_CHAT,
    payload: Number(idChat)
})