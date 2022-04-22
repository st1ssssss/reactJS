


export const Message = (props) => {

    if (!props.chatId || !props.messageList[props.chatId]) return (
        <ol className="msg-list"></ol>
    )

    return (
        <ol className="msg-list">
            {
                props.messageList[props.chatId].map(el => {


                    if (el.author === 'user') return <span className="msg-user" key={Math.floor(Math.random() * 1000)}>{el.name}: {el.text}<br /></span>
                    if (el.author === 'bot')
                        return <span className="msg-bot" key={Math.floor(Math.random() * 1000)}>{el.name}: {el.text} <br /></span>
                })

            }
        </ol>
    )
}








export default Message