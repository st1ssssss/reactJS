function Message(props) {


    return (
        <ol className="msg-list">
            {props.list.map(item => {
                if (item.name === 'user')
                    return <span className="msg-user" key={Math.floor(Math.random() * 1000)}>{item.name}: {item.text} <br /></span>
                if (item.name === 'bot')
                    return <span className="msg-bot" key={Math.floor(Math.random() * 1000)}>{item.name}: {item.text} <br /></span>
            })}
        </ol>
    )
}








export default Message