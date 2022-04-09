const initialState = {
    chatList: [
        { name: 'Ivan', idChat: 1 },
        { name: 'Ivan', idChat: 2 }
    ]
}

export const dialogsReducer = (state = initialState, action) => {
    const currentChats = state.chatList
    switch (action.type) {
        case 'DIALOGS::ADD_NEW_CHAT':
            return {
                ...state,
                chatList: [
                    ...currentChats,
                    {
                        name: action.payload.name,
                        idChat: action.payload.idChat
                    }
                ]

            }

        case 'DIALOGS::DELETE_CHAT':
            let chatToDelete = undefined
            state.chatList.forEach(chat => {
                if (chat.idChat === action.payload) {
                    chatToDelete = (state.chatList.indexOf(chat))
                }
                else return
            })
            state.chatList.splice(chatToDelete, 1)
            const restChats = state.chatList
            return {
                ...state,
                chatList: [
                    ...restChats
                ]

            }


        default:
            return state;
    }
}