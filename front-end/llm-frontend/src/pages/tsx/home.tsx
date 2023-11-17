import React, { useState } from 'react';
import '../css/home.css';
import Navbar from '../../components/tsx/Navbar';
import { Router } from 'express';
import { Link } from "react-router-dom";

export const Home = () => {
  
  return (
    <div className="landing-container">
      <Navbar/>

      <main>
        <section className="hero">
          <div className='hero-calltoaction'>
            <h1>Be Productive.<br />Complete Task.<br />Get Rewarded.</h1>
            <Link to="/signup">
              <button className="cta">
              Create an Account
              </button>
            </Link>
          </div>
          
        </section>
        <div className='feature-title'>
          <h2>Features</h2>
        </div>
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
          
          <h2 className='gamification-title'>Boost Your Productivity with Gamification</h2>
          <div className='gamification-about'>
            <h2>
              What is Gamification?
            </h2>
            <p>
            Gamification is the application of game-design elements and principles in non-game contexts to enhance engagement, motivation, and participation, such as points, badges, leaderboards, challenges, and rewards. The goal of gamification is to make the experience more enjoyable, encourage desired behaviors, and motivate individuals to achieve specific objectives.
            </p>

          </div>

          <div className='gamification-elements'>
            <h2 className='gamification-title'>How do we incorporate Gamification?</h2>
            <div className='gamification-features-container'>
              <div className='gamification-features'>
                <svg width="125" height="125" viewBox="0 0 125 125" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 98.9502V109.375C0 117.993 20.9961 125 46.875 125C72.7539 125 93.75 117.993 93.75 109.375V98.9502C83.667 106.055 65.2344 109.375 46.875 109.375C28.5156 109.375 10.083 106.055 0 98.9502ZM78.125 31.25C104.004 31.25 125 24.2432 125 15.625C125 7.00684 104.004 0 78.125 0C52.2461 0 31.25 7.00684 31.25 15.625C31.25 24.2432 52.2461 31.25 78.125 31.25ZM0 73.3398V85.9375C0 94.5557 20.9961 101.562 46.875 101.562C72.7539 101.562 93.75 94.5557 93.75 85.9375V73.3398C83.667 81.6406 65.21 85.9375 46.875 85.9375C28.54 85.9375 10.083 81.6406 0 73.3398ZM101.562 76.0254C115.552 73.3154 125 68.2861 125 62.5V52.0752C119.336 56.0791 111.011 58.8135 101.562 60.498V76.0254ZM46.875 39.0625C20.9961 39.0625 0 47.8027 0 58.5938C0 69.3848 20.9961 78.125 46.875 78.125C72.7539 78.125 93.75 69.3848 93.75 58.5938C93.75 47.8027 72.7539 39.0625 46.875 39.0625ZM100.415 52.8076C115.063 50.1709 125 44.9951 125 39.0625V28.6377C116.333 34.7656 101.44 38.0615 85.7666 38.8428C92.9687 42.334 98.2666 47.0215 100.415 52.8076Z" fill="black"/>
                </svg>
                <h2>Points</h2>
                <p>Earn points by doing various tasks and challenges and earn your spot on the leaderboard.</p>
              </div>
              <div className='gamification-features'>
                <svg width="150" height="105" viewBox="0 0 150 105" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M99.7771 52.5053C95.8164 52.5053 92.0901 50.3961 90.0746 47.0213L75.0052 22.0385L59.9593 47.0213C57.9203 50.4195 54.194 52.5288 50.2333 52.5288C49.1787 52.5288 48.1241 52.3881 47.1163 52.0835L15.009 42.8966V84.6126C15.009 88.0577 17.3526 91.0575 20.6805 91.8778L71.3492 104.557C73.7396 105.143 76.2473 105.143 78.6143 104.557L129.33 91.8778C132.658 91.0341 135.001 88.0343 135.001 84.6126V42.8966L102.894 52.06C101.886 52.3647 100.832 52.5053 99.7771 52.5053ZM149.602 26.2101L137.532 2.1179C136.806 0.664871 135.236 -0.178825 133.619 0.0320986L75.0052 7.50819L96.496 43.1544C97.3866 44.6308 99.1677 45.3339 100.832 44.8652L147.212 31.6238C149.532 30.9442 150.657 28.3662 149.602 26.2101ZM12.4779 2.1179L0.408332 26.2101C-0.669725 28.3662 0.47864 30.9442 2.77537 31.6004L49.1553 44.8417C50.8192 45.3105 52.6004 44.6074 53.4909 43.1309L75.0052 7.50819L16.3683 0.0320986C14.7512 -0.155389 13.2044 0.664871 12.4779 2.1179Z" fill="black"/>
                </svg>

                <h2>Rewards</h2>
                <p>Earn various rewards such as customization by completing challenges.</p>
              </div>
              <div className='gamification-features'>
                <svg width="125" height="125" viewBox="0 0 125 125" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M111.607 125H13.3929C5.99609 125 0 119.004 0 111.607V13.3929C0 5.99609 5.99609 0 13.3929 0H111.607C119.004 0 125 5.99609 125 13.3929V111.607C125 119.004 119.004 125 111.607 125ZM54.4961 97.6398L105.835 46.3005C107.579 44.5572 107.579 41.7305 105.835 39.9872L99.522 33.6738C97.7787 31.9305 94.952 31.9302 93.2084 33.6738L51.3393 75.5427L31.7916 55.995C30.0483 54.2517 27.2215 54.2517 25.478 55.995L19.1646 62.3083C17.4213 64.0516 17.4213 66.8784 19.1646 68.6217L48.1825 97.6395C49.9261 99.3834 52.7525 99.3834 54.4961 97.6398Z" fill="black"/>
                </svg>
                <h2>Challenges</h2>
                <p>Complete many challenges to keep you motivated and earn points and rewards.</p>
              </div>
              
            </div>
          </div>

        </section>
      </main>
    </div>
  );
};

export default Home;
