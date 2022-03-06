import { Container, Box, Paper, TextField, Button, FormControl } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import '../App.css';
import Message from './Message'
import { Dialogs } from './Dialogs';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Home from './Home';


function Form() {
    const dialogsArr = {
        12: { name: 'Ivan', id: 12, messageText: { user: 'user', text: 'text from user 12' } },
        34: { name: 'Ivan', id: 34, messageText: { user: 'user', text: 'text from user 34' } },
        56: {
            name: 'Ivan', id: 56, messageText: { user: 'user', text: 'text from user 56' }
        }
    }

    const [messages, setMessages] = useState([])
    const [value, setValue] = useState('')
    const { chatId } = useParams()

    const setNewMessage = (name, text) => {
        const messageList = [...messages]
        const newMessage = {
            name,
            text
        }
        messageList.push(newMessage)
        setMessages(messageList)

    }

    const renderMsg = (chatId) => {

        setNewMessage(dialogsArr[chatId].messageText.user, dialogsArr[chatId].messageText.text)
    }

    const onChngSetValue = (event) => {
        setValue(event.target.value)
    }

    const onSubmitBtn = (event) => {
        event.preventDefault()
        setNewMessage('user', value)
        resetForms()
    }

    const resetForms = () => {
        setValue('')

    }

    useEffect(() => {

        document.querySelector('#outlined-basic').focus()

        if (messages.length === 0) return

        const last = messages[messages.length - 1]

        if (last.name === 'bot') {
            return
        }
        setNewMessage('bot', 'Hello')

    }, [messages])

    useEffect(() => {
        if (chatId !== undefined) renderMsg(chatId)
        else return
    }, [chatId])



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
                }}><Dialogs dialogsArr={dialogsArr} /></Box>

                <Box sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'end',
                    flexDirection: 'column',
                }}>
                    <Message list={messages} />
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