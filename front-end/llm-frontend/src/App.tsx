import React from 'react';
import './App.css';
import Login from './pages/tsx/Login';
import LoginForm from './pages/tsx/Login';
import SignupForm from './pages/tsx/Signup';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LoginForm/>
        <SignupForm/>
      </header>
    </div>
  );
}

export default App;