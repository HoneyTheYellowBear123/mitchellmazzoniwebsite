import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div>
            <Link to="/">
                <button>Home</button>
            </Link>
            <Link to="/theFUNzone">
                <button>The Fun Zone</button>
            </Link>
        </div>
    )
}

export default NavBar;