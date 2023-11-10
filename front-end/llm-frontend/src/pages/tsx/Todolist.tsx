import Navbar from "../../components/tsx/Navbar";
import Sidebar from "../../components/tsx/Sidebar";
import '../css/Todolist.css';
import React, { useState } from 'react';

export default function Todolist() {
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskDate, setTaskDate] = useState('');

    return(
        <div>
            <Navbar />
            <Sidebar />
            <div className="todolist-page">

                <div className="task-page-container">
                    <div className="task-page-left-container"> 
                        {/* <button className="task-input">
                            <svg className="task-input-icon" width="45" height="48" viewBox="0 0 45 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.5 17C0.5 8.99187 6.99187 2.5 15 2.5H30C38.0081 2.5 44.5 8.99187 44.5 17V33C44.5 41.0081 38.0081 47.5 30 47.5H0.5V17Z" fill="#07BEB8"/>
                            <path d="M0.5 17C0.5 8.99187 6.99187 2.5 15 2.5H30C38.0081 2.5 44.5 8.99187 44.5 17V33C44.5 41.0081 38.0081 47.5 30 47.5H0.5V17Z" fill="white" fill-opacity="0.2"/>
                            <path d="M0.5 17C0.5 8.99187 6.99187 2.5 15 2.5H30C38.0081 2.5 44.5 8.99187 44.5 17V33C44.5 41.0081 38.0081 47.5 30 47.5H0.5V17Z" stroke="#22223B"/>
                            <path d="M21.4318 33.2102V16.3352H24.2955V33.2102H21.4318ZM14.4261 26.2045V23.3409H31.3011V26.2045H14.4261Z" fill="#22223B"/>
                            </svg>
                            Add a Task...
                        </button> */}
                        <form className="task-input-form">
                            <svg className="task-input-icon" width="45" height="48" viewBox="0 0 45 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.5 17C0.5 8.99187 6.99187 2.5 15 2.5H30C38.0081 2.5 44.5 8.99187 44.5 17V33C44.5 41.0081 38.0081 47.5 30 47.5H0.5V17Z" fill="#07BEB8"/>
                            <path d="M0.5 17C0.5 8.99187 6.99187 2.5 15 2.5H30C38.0081 2.5 44.5 8.99187 44.5 17V33C44.5 41.0081 38.0081 47.5 30 47.5H0.5V17Z" fill="white" fill-opacity="0.2"/>
                            <path d="M0.5 17C0.5 8.99187 6.99187 2.5 15 2.5H30C38.0081 2.5 44.5 8.99187 44.5 17V33C44.5 41.0081 38.0081 47.5 30 47.5H0.5V17Z" stroke="#22223B"/>
                            <path d="M21.4318 33.2102V16.3352H24.2955V33.2102H21.4318ZM14.4261 26.2045V23.3409H31.3011V26.2045H14.4261Z" fill="#22223B"/>
                            </svg>

                            <input type="text" className="task-name-input" placeholder="Task Name" value={taskName} onChange={(e) => setTaskName(e.target.value)}/>
                            <textarea className="task-description-input" placeholder="Description" value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)}></textarea>
                            <div className="task-input-bottom">
                                <input type="date" className="task-date-input" value={taskDate} onChange={(e) => setTaskDate(e.target.value)}></input>
                                <div>
                                    {/* <button className="task-cancel-button">Cancel</button>   */}
                                    <button type="submit" className="task-submit-button">Add Task</button>
                                </div>
                            </div>
                        </form>

                        <div className="task-container">
                            <button type="button" className="check-button"></button>
                            <div className="task-information">
                                <h1 className="task-info-name">Task Name</h1>
                                <p className="task-info-desc">Task Description</p>
                                <p className="task-info-date">Task Date</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="task-page-right-container">
                    
                    </div>
                </div>

            </div>
        </div>
    )
}