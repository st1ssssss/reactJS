import { List, ListItem, ListItemText } from '@mui/material'
import { nanoid } from 'nanoid'

export const Dialogs = (props) => {
    return (<List >
        {props.dialogsArr.map(item => {
            return <ListItem key={nanoid()}>
                <ListItemText primary={item.name} secondary={item.id} />
            </ListItem>
        })}

    </List>)
}
