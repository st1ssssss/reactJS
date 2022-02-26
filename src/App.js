
import './App.css';
import Message from './Message'
import { useEffect, useState } from 'react';



function App() {

  const [messages, setMessages] = useState([])
  const [value, setValue] = useState('')


  const setNewMessage = (name, text) => {
    const messageList = [...messages]
    const newMessage = {
      name,
      text
    }
    messageList.push(newMessage)
    setMessages(messageList)

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

    if (messages.length === 0) return

    const last = messages[messages.length - 1]

    if (last.name === 'bot') {
      return
    }
    setNewMessage('bot', 'Hello')

  }, [messages])



  return (
    <div className="App">

      <form onSubmit={onSubmitBtn}>
        <input placeholder='Type your message' type='text' value={value} onChange={onChngSetValue} id='messageText' />
        <button>Send</button>
      </form>
      <Message list={messages} />

    </div>
  );
}

export default App;
