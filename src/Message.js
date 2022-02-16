import styles from './message.module.css'

function Message(props) {
    return (
        <div className={styles.message}>
            <p className={styles.text}>{props.text}</p>
        </div>
    )
}

export default Message