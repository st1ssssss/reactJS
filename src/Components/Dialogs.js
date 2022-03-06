import { List, ListItem, ListItemText } from '@mui/material'
import { Link } from 'react-router-dom'
import { nanoid } from 'nanoid'

export const Dialogs = (props) => {

    return (<List >
        {
            Object.keys(props.dialogsArr).map(item => {
                return <ListItem key={nanoid()}>
                    <Link to={`/chats/${item}`}><ListItemText primary={props.dialogsArr[item].name} secondary={item} /></Link>
                </ListItem>
            })}

    </List>)
}
