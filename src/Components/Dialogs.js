import { List, ListItem, ListItemText } from '@mui/material'
import { Link, useParams } from 'react-router-dom'
import { nanoid } from 'nanoid'
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { addNewDialog, deleteDialog } from '../store/Dialogs/actions'
import { deleteMessages } from '../store/Messages/actions'

export const Dialogs = (props) => {

    const dispatch = useDispatch()
    const { chatId } = useParams()

    const createChat = useCallback((e) => {
        e.preventDefault()
        dispatch(addNewDialog(Math.floor(Math.random() * 100), 'user'))
    })

    const deleteChat = useCallback((e) => {
        e.preventDefault()
        dispatch(deleteDialog(chatId))
        dispatch(deleteMessages(chatId))

    })


    return (<List >
        {
            props.dialogsArr.map(item => {
                return <ListItem key={nanoid()}>
                    <Link to={`/chats/${item.idChat}`}><ListItemText primary={item.name} secondary={item.idChat} /></Link>

                </ListItem>
            })}
        <button onClick={deleteChat}>Delete selected chat</button>
        <button onClick={createChat}>click</button>
    </List>)
}
