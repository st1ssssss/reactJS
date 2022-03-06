import { Link } from "react-router-dom"
import { BottomNavigation, BottomNavigationAction } from '@mui/material'

function Home() {
    return (
        <div className="header">
            <Link to='/'>Home</Link>
            <Link to='/chats'>chats</Link>
            <Link to='/profile'>profile</Link>
        </div>
    )
}

export default Home