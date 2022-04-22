const ADD_NEW_MESSAGE = 'MESSAGELIST::ADD_MESSAGE'
const DELETE_MESSAGELIST = 'MESSAGELIST::DELETE_MESSAGES'

export const addMessage = (id, author, text, name) => ({
    type: ADD_NEW_MESSAGE,
    payload: {
        chatId: id,
        author: author,
        text: text,
        name: name,
    }
})

export const addMessageWithThunk = (chatId, message, author, name) => (dispatch) => {
    dispatch(addMessage(Number(chatId), author, message, name))
    if (author !== 'bot') {
        setTimeout(() => dispatch(addMessage(Number(chatId), 'bot', 'hello from bot!', 'bot UselessMouth')), 2000)
    }
}

export const deleteMessages = (id) => ({
    type: DELETE_MESSAGELIST,
    payload: Number(id)
}) 