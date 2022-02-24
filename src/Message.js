function Message(props) {


    return (
        <ol>
            {props.list.map(item => {
                return <span key={Math.floor(Math.random() * 1000)}>{item.name}: {item.text} <br /></span>

            })}
        </ol>
    )
}








export default Message