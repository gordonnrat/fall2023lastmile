import { Link } from "react-router-dom";
import '../css/Navbar.css';

export default function Navbar() {
    return(
        <div className="navbar">
            <ul className="navbar-links">
                <li>
                    <Link to="/">
                        <div className="navbar-left-logo">
                            {/* <img src="https://placehold.co/400" alt="logo" /> */}
                            <h1 className="website-name-gradient">our website name</h1>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/"> 
                    {/* either links to account page or opens a drop down for account settings */}
                        <div className="navbar-right-account">
                            <h1>Account Name</h1>
                            <img src="https://placehold.co/400" alt="profile pic" />
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    )
}