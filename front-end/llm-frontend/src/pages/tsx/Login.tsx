import React, { useState } from 'react';
import "../css/Login.css";
const LoginForm: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle your login logic here
        console.log("Email:", email, "Password:", password);
    };

    return (
        <div className="container">
            <div className="bi">
                
            </div>
            <form onSubmit={handleSubmit} className='loginform'>
                <h2>Log In</h2>
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
                
                <input type="submit" value="Log In" />
                <a href="/#/signup">Don't have an account? Sign up</a>
            </form>
            
        </div>
    );
};

export default LoginForm;