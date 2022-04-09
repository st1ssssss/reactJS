import { Container, Box, Paper, TextField, Button, FormControl } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import '../App.css';
import Message from './Message'
import { Dialogs } from './Dialogs';
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Home from './Home';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../store/Messages/actions';


function Form() {

    const dispatch = useDispatch()

    const { name } = useSelector(state => state.profile)
    const { chatList } = useSelector(state => state.dialogs)
    const { messageList } = useSelector(state => state.messages)

    const [value, setValue] = useState('')
    const { chatId } = useParams()



    const onChngSetValue = useCallback((event) => {

        setValue(event.target.value)

    }, [value])

    const onSubmitBtn = useCallback((event) => {
        event.preventDefault()

        dispatch(addMessage(Number(chatId), 'user', value, name))
        resetForms()
    }, [dispatch, value])

    const resetForms = () => {
        setValue('')

    }







    return (
        <Container className="App" maxWidth='sm'>
            <Home />
            <Paper elevation={3} sx={{
                display: 'flex',
                height: '500px'
            }}>
                <Box sx={{
                    width: '100%',
                    maxWidth: '150px'
                }}><Dialogs dialogsArr={chatList} /></Box>

                <Box sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'end',
                    flexDirection: 'column',
                }}>
                    <Message messageList={messageList} chatId={chatId} />
                    <FormControl sx={{ display: 'flex', flexDirection: 'row' }}>
                        <TextField id="outlined-basic" label="Type your message" variant="outlined" value={value} onChange={onChngSetValue} autoFocus size='small' sx={{ width: '40ch' }} />

                        <Button onClick={onSubmitBtn} type='submit' variant="contained" endIcon={<SendIcon />} size='medium'>
                            Send
                        </Button>
                    </FormControl>
                </Box>


            </Paper>
        </Container>
    )
}

export default Form