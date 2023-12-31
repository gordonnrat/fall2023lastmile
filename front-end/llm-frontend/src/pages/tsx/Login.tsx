import React, { useState } from 'react';
import "../css/Login.css";
import img1 from "../../images/loginimg.png";
import { useNavigate } from 'react-router-dom';

const LoginForm: React.FC = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const DOMAIN_NAME = "http://localhost:4000/";

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Handle your login logic here '
        console.log(email + " " + password);
        const formData = {
            email: email,
            password: password
        }
        
        await fetch (DOMAIN_NAME + "login", {
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
                navigate('/todolist')
                // Redirect to the homepage 
            }
        });
    };

    return (
        <div className="container">
            <div className='bi'>
                <img className='login-img' src={img1} alt = "Chibi art"></img>
            </div>
            <div className='form-container'>
                <form onSubmit={handleSubmit} className='loginform'>
                    <h2>Log In</h2>
                    <p id="errorMsg"></p>
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        id="email"
                        placeholder="enter your email."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="enter your password."
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    
                    <input type="submit" value="Log In" />
                    <a href="/#/signup">Don't have an account? Sign up</a>
                </form>
            </div>
            
        </div>
    );
};

export default LoginForm;