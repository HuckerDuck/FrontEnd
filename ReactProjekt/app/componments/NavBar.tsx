import { Link } from "react-router"

export default function NavBar(){
    return (
        <nav className="navBar">
            <ul className="navList">
                <li className="navItem"><Link to="/">Hem</Link></li>
                <li className="navItem"><Link to="/about">Om Oss</Link></li>
            </ul>
        </nav>

    );
}