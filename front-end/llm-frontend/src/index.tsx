import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Todolist from './pages/Todolist';
import { HashRouter as Router, Routes, Route }
    from 'react-router-dom';
import Login from './pages/Login';
import LoginForm from './pages/Login';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
          <Routes>
            <Route path='/todolist' element={<Todolist/>}/>
            <Route path='/login' element={<LoginForm/>}/>
          </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
