import './navBar.css'
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div className="navBar">
            <Link to="/">
                <button>Home</button>
            </Link>
            <Link to="/portfolio">
            <button>Professional Summary</button>
            </Link>
            <Link to="/theFUNzone">
                <button className="funButton">The Fun Zone</button>
            </Link>
        </div>
    )
}

export default NavBar;