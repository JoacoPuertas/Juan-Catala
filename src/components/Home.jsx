import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    return (
        <div className="nav">
            <Link to="/reels">REELS</Link>
            <Link to="/">WORK</Link>
            <Link to="/about">ABOUT ME</Link>
            <Link to="/contact">CONTACT</Link>
        </div>
    );
}

export default Home;
