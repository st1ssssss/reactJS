import { nanoid } from 'nanoid'

const initialState = {
    messageList: {
        1: [
            { author: 'user', name: 'Ivan', text: 'hello', id: 1 },
            { author: 'bot', name: 'bot', text: 'hello from bot!', id: 2 }
        ],
        2: [
            { author: 'user', name: 'Ivan', text: 'hello from 2', id: 1 },
            { author: 'bot', name: 'bot', text: 'hello from bot!', id: 2 }
        ]
    }
}

export const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MESSAGELIST::ADD_MESSAGE':
            const currentMessages = state.messageList[action.payload.chatId] || []
            const previousMessages = state.messageList

            return {
                ...state,
                messageList: {
                    ...previousMessages,
                    [action.payload.chatId]: [
                        ...currentMessages,
                        {
                            author: action.payload.author,
                            name: action.payload.name,
                            text: action.payload.text,
                            id: nanoid()
                        }
                    ]
                }
            }

        case 'MESSAGELIST::DELETE_MESSAGES':
            console.log(state.messageList[action.payload])

            delete state.messageList[action.payload]
            const restMessages = state.messageList
            console.log(restMessages)
            return {

                messageList: {
                    ...restMessages
                }

            }

        default:
            return state
    }
}