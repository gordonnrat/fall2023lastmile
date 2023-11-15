import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from "./pages/tsx/home"
import App from './App';
import reportWebVitals from './reportWebVitals';
import Todolist from './pages/tsx/Todolist';
import { HashRouter as Router, Routes, Route }
    from 'react-router-dom';
import Login from './pages/tsx/Login';
import LoginForm from './pages/tsx/Login';
import SignupForm from './pages/tsx/Signup';

import Leaderboard from './pages/tsx/leaderboard';
=======
import Accounts from './pages/tsx/Accounts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
          <Routes>
            <Route path='/todolist' element={<Todolist/>}/>
            <Route path='/login' element={<LoginForm/>}/>
            <Route path='/signup' element={<SignupForm/>}/>
            <Route path='/home' element={<Home/>}/>

            <Route path='/leaderboard' element={<Leaderboard/>}/>

            <Route path='/accounts' element={<Accounts/>}/>

          </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
