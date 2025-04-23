import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
    return (
        <nav className="nav">
            <Link to="/reels">REELS</Link>
            <Link to="/work">WORK</Link>
            <Link to="/about">ABOUT ME</Link>
            <Link to="/contact">CONTACT</Link>
        </nav>
    )
}

export default Home
