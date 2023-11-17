import { Link, useLocation } from "react-router-dom";
import '../css/Navbar.css';
import React, { useState, useEffect } from 'react';

export default function Navbar() {
    const [isLandingPage, setIsLandingPage] = useState(true);
    const location = useLocation();
  
    useEffect(() => {
      setIsLandingPage(location.pathname === '/home')
      setIsLandingPage(location.pathname === '/');
    }, [location.pathname]);

    return(
        <div className="navbar">
            <ul className="navbar-links">
                <li>
                    <div className="navbar-left-container">
                        <ul>
                            <li>
                                <Link to="/home">
                                    <div className="navbar-left-logo">
                                        {/* <img src="https://placehold.co/400" alt="logo" /> */}
                                        <h1 className="website-name-gradient">Re:Questify</h1>
                                    </div>
                                </Link>
                            </li>
                            {isLandingPage ? 
                            <div>

                            </div> : 
                            <ul>
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
                            }
                        </ul>
                    </div>
                </li>
                {isLandingPage ? 
                    <div>
                        <Link to="/signup">
                            <button className="landing-signup-button">Sign Up</button>
                        </Link>
                        <Link to="/login">
                            <button className="landing-login-button">Log In</button>
                        </Link>
                    </div> : 
                    <li>
                        <Link to="/accounts">     
                            <div className="navbar-right-account">
                                <h1>Account Settings</h1>
                                <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.7829 11.013L15.2577 10.1323C15.4116 9.30165 15.4116 8.44953 15.2577 7.61891L16.7829 6.73815C16.9583 6.6379 17.0371 6.43025 16.9798 6.23691C16.5824 4.96233 15.9057 3.80947 15.0214 2.84995C14.8853 2.70316 14.6633 2.66736 14.4915 2.7676L12.9663 3.64836C12.3254 3.09699 11.5879 2.67094 10.7894 2.39167V0.633746C10.7894 0.433249 10.6498 0.257815 10.4529 0.214851C9.13893 -0.078733 7.79274 -0.0644118 6.54321 0.214851C6.3463 0.257815 6.20667 0.433249 6.20667 0.633746V2.39525C5.41184 2.6781 4.6743 3.10415 4.02984 3.65194L2.50822 2.77118C2.33278 2.67094 2.11438 2.70316 1.97833 2.85353C1.094 3.80947 0.417324 4.96233 0.0199107 6.24049C-0.0409543 6.43383 0.0413925 6.64148 0.216827 6.74173L1.74203 7.62249C1.58808 8.45312 1.58808 9.30523 1.74203 10.1359L0.216827 11.0166C0.0413925 11.1169 -0.037374 11.3245 0.0199107 11.5178C0.417324 12.7924 1.094 13.9453 1.97833 14.9048C2.11438 15.0516 2.33636 15.0874 2.50822 14.9872L4.03342 14.1064C4.6743 14.6578 5.41184 15.0838 6.21025 15.3631V17.1246C6.21025 17.3251 6.34988 17.5005 6.54679 17.5435C7.86076 17.8371 9.20695 17.8228 10.4565 17.5435C10.6534 17.5005 10.793 17.3251 10.793 17.1246V15.3631C11.5879 15.0802 12.3254 14.6542 12.9698 14.1064L14.4951 14.9872C14.6705 15.0874 14.8889 15.0552 15.0249 14.9048C15.9093 13.9489 16.5859 12.796 16.9834 11.5178C17.0371 11.3209 16.9583 11.1133 16.7829 11.013ZM8.49806 11.7398C6.91914 11.7398 5.63382 10.4545 5.63382 8.87559C5.63382 7.29668 6.91914 6.01135 8.49806 6.01135C10.077 6.01135 11.3623 7.29668 11.3623 8.87559C11.3623 10.4545 10.077 11.7398 8.49806 11.7398Z" fill="black"/>
                                </svg>
                            </div>
                        </Link>
                    </li>
                }
            </ul>
        </div>
    )
}