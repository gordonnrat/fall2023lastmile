import Navbar from "../../components/tsx/Navbar";
import Sidebar from "../../components/tsx/Sidebar";
import '../css/Accounts.css';
import React, { useState } from 'react';


export default function Accounts() {
    const [currentEmail, setCurrentEmail] = useState('');
    const [newEmail, updateEmail] = useState('');
    const [newPassword, updatePassword] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');

    return(
        <div>
            <Navbar />
            <Sidebar />
            <div className="accounts-page">
                <form className="accounts-page-form">
                <h2>Change your Email.</h2>
                <input type="email" className="accounts-settings-input" placeholder="Current email." value={currentEmail} onChange={(e) => setCurrentEmail(e.target.value)}/>

                <input type="email" className="accounts-settings-input" placeholder="New email." value={newEmail} onChange={(e) => updateEmail(e.target.value)}/>
                <div className="accounts-left-flex">
                    <button type="submit" className="accounts-button">Set new Email</button>
                </div>
                </form>
                
                <form className="accounts-page-form">
                <h2>Change your Password.</h2>
                <input type="email" className="accounts-settings-input" placeholder="Current password." value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)}/>

                <input type="email" className="accounts-settings-input" placeholder="New password." value={newPassword} onChange={(e) => updatePassword(e.target.value)}/>
                <div className="accounts-left-flex">
                    <button type="submit" className="accounts-button">Set new Password</button> 
                </div>
                </form>
            </div>
        </div>
    )
}