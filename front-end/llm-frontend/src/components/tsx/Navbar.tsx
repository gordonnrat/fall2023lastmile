import { Link } from "react-router-dom";
import '../css/Navbar.css';
import React, { useState } from 'react';

export default function Navbar() {
    const [isLandingPage, setIsLandingPage] = useState(true);
    

    return(
        <div className="navbar">
            <ul className="navbar-links">
                <li>
                    <div className="navbar-left-container">
                        <ul>
                            <li>
                                <Link to="/">
                                    <div className="navbar-left-logo">
                                        {/* <img src="https://placehold.co/400" alt="logo" /> */}
                                        <h1 className="website-name-gradient">our website name</h1>
                                    </div>
                                </Link>
                            </li>
                            <li className="navbar-left-links navbar-left-hover">
                                <Link to="/shop" className="navbar-left-text">
                                    Shop
                                </Link>
                            </li>
                            <li className="navbar-left-links navbar-left-hover">
                                <Link to="/leaderboard" className="navbar-left-text">
                                    Leaderboard
                                </Link>
                            </li>
                            <li className="navbar-left-links navbar-left-hover">
                                <Link to="/achievements" className="navbar-left-text">
                                    Achievements
                                </Link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <Link to="/accounts"> 
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