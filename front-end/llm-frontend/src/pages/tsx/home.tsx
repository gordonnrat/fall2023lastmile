import React from 'react';
import '../css/home.css';
import Navbar from '../../components/tsx/Navbar';
import { Router } from 'express';

export const Home = () => {
  return (
    <div className="landing-container">
      <Navbar/>

      <main>
        <section className="hero">
          <h1>Be Productive.<br />Complete Task.<br />Get Rewarded.</h1>
          <button className="cta">
          <a href="/#/signup" className='signupbtn'>Create an Account</a>
          </button>
          
        </section>

        <section className="features">
        <h2>Features</h2>
          <div className="feature">
            <div className="icon to-do-icon"></div>
            <h2>To-Do List</h2>
            <p>Create Tasks for yourself and check them off as you complete them!</p>
          </div>

          <div className="feature">
            <div className="icon boards-icon"></div>
            <h2>Boards</h2>
            <p>Structure your project with tasks organized in different stages of progress.</p>
          </div>

          <div className="feature">
            <div className="icon calendar-icon"></div>
            <h2>Calendar</h2>
            <p>Organize your schedule by adding events to the Calendar.</p>
          </div>
          
        </section>

        <section className="gamification">
          
          <h2>Boost Your Productivity with Gamification</h2>
          <p>
            What is Gamification?<br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
          </p>
        </section>
      </main>
    </div>
  );
};

export default Home;
