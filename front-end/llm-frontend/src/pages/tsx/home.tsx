import React from 'react';
import '../css/home.css';

export const Home = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="website-name">Our Website Name</div>
        <nav className="navigation">
          <button className="sign-up">
            <a href='/#/sign-up'></a>
            Sign Up</button>
          <button className="log-in">Log In</button>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1>Be Productive.<br />Complete Task.<br />Get Rewarded.</h1>
          <button className="cta">Create an Account</button>
        </section>

        <section className="features">
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
