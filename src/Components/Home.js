import { Link } from "react-router-dom"

function Home() {
    return (
        <div className="header">
            <Link to='/'>Home</Link>
            <Link to='/chats'>chats</Link>
            <Link to='/profile'>profile</Link>
            <Link to='/gists'>gists</Link>
        </div>
    )
}

export default Home