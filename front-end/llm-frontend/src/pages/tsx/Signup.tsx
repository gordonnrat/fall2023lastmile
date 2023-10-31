import React, { useState } from 'react';
import "../css/Signup.css";

const SignupForm: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle your signup logic here
        console.log("Username:", username, "Email:", email, "Password:", password);
    };

    return (
        <div className="container">
            <div className="bi">
                
            </div>
            <form onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    placeholder="choose a username."
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    id="email"
                    placeholder="enter your email."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    placeholder="enter your password."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <label htmlFor="confirm-password">Confirm Password</label>
                <input
                    type="password"
                    id="confirm-password"
                    placeholder="re-enter your password."
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                
                <input type="submit" value="Sign Up" />
                <a href="/#/login">Already have an account? Log in</a>
            </form>
        </div>
    );
};

export default SignupForm;
