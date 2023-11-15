import Navbar from "../../components/tsx/Navbar";
import Sidebar from "../../components/tsx/Sidebar";
import '../css/Accounts.css';
import React, { useState } from 'react';


export default function Accounts() {
    const [currentEmail, setCurrentEmail] = useState('');
    const [newEmail, updateEmail] = useState('');
    const [newPassword, updatePassword] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const DOMAIN_NAME = "http://localhost:4000/";

    const handleEmailSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Handle your login logic here '
        console.log(newEmail);
        const formData = {
            id: localStorage.getItem("id"),
            email: newEmail,
        }
        
        await fetch (DOMAIN_NAME + "updateUserEmail", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData),
        }).then(async (res) => {
            const p = document.querySelector('#errorMsg');
            if (p == null) { return }
            if (!res.ok) {
                p.textContent = "Incorrect Login Information!";
                return;
            } else {
                const userData = await res.json();
                localStorage.setItem("email", userData.email);
                localStorage.setItem("id", userData.id);
                p.textContent = "";
                // Redirect to the homepage 
            }
        });
    };

    const handlePasswordSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Handle your login logic here '
        console.log(newPassword);
        const formData = {
            id: localStorage.getItem("id"),
            password: newPassword,
        }
        
        await fetch (DOMAIN_NAME + "updateUserPassword", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData),
        }).then(async (res) => {
            const p = document.querySelector('#errorMsg');
            if (p == null) { return }
            if (!res.ok) {
                p.textContent = "Incorrect Login Information!";
                return;
            } else {
                const userData = await res.json();
                localStorage.setItem("email", userData.email);
                localStorage.setItem("id", userData.id);
                p.textContent = "";
                // Redirect to the homepage 
            }
        });
    };

    return(
        <div>
            <Navbar />
            <Sidebar />
            <div className="accounts-page">
                <form className="accounts-page-form" onSubmit={handleEmailSubmit}>
                <h2>Change your Email.</h2>
                <input type="email" className="accounts-settings-input" placeholder="Current email." value={currentEmail} onChange={(e) => setCurrentEmail(e.target.value)}/>

                <input type="email" className="accounts-settings-input" placeholder="New email." value={newEmail} onChange={(e) => updateEmail(e.target.value)}/>
                <div className="accounts-left-flex">
                    <button type="submit" className="accounts-button">Set new Email</button>
                </div>
                </form>
                
                <form className="accounts-page-form" onSubmit={handlePasswordSubmit}>
                <h2>Change your Password.</h2>
                <input type="password" className="accounts-settings-input" placeholder="Current password." value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)}/>

                <input type="password" className="accounts-settings-input" placeholder="New password." value={newPassword} onChange={(e) => updatePassword(e.target.value)}/>
                <div className="accounts-left-flex">
                    <button type="submit" className="accounts-button">Set new Password</button> 
                </div>
                </form>
            </div>
        </div>
    )
}