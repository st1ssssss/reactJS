import '../App.css';
import { useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { addMessageWithThunk } from '../store/Messages/actions';
import { Form } from './Form';

export const FormContainer = () => {

    const dispatch = useDispatch()

    const { name } = useSelector(state => state.profile)
    const { chatList } = useSelector(state => state.dialogs)
    const { messageList } = useSelector(state => state.messages)

    const [value, setValue] = useState('')
    const { chatId } = useParams()



    const onAddMessage = useCallback((value) => {
        dispatch(addMessageWithThunk(chatId, value, 'user', name))
    }, [dispatch, chatId])

    const onChngSetValue = useCallback((event) => {

        setValue(event.target.value)

    }, [value])

    const onSubmitBtn = useCallback((event) => {
        event.preventDefault()

        onAddMessage(value)
        resetForms()
    }, [dispatch, value])

    const resetForms = () => {
        setValue('')

    }

    return (
        <Form
            chatList={chatList}
            messageList={messageList}
            chatId={chatId}
            value={value}
            onChngSetValue={onChngSetValue}
            onSubmitBtn={onSubmitBtn}
        />
    )
}