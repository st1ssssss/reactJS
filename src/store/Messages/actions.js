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

export const deleteMessages = (id) => ({
    type: DELETE_MESSAGELIST,
    payload: Number(id)
}) 