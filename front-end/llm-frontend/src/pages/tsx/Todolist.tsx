import { log } from "console";
import Navbar from "../../components/tsx/Navbar";
import Sidebar from "../../components/tsx/Sidebar";
import '../css/Todolist.css';
import React, { useState, useEffect } from 'react';
import Taskcomponent from "../../components/tsx/Taskcomponent";
type HandleGetTask = () => void;
interface Task {
    taskname: string;
    taskdesc: string;
    date: string;
    taskid:number;
    handleGetTask:HandleGetTask; // You might need to adjust the type here based on your actual data structure
  }

export default function Todolist() {
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [taskList, setTaskList] = useState([]);
    const DOMAIN_NAME = "http://localhost:4000/";

    const handleCreateTask = async (e: React.FormEvent) => {
        e.preventDefault();
        const formData = {
            id: localStorage.getItem("id"),
            taskname: taskName,
            taskdesc: taskDescription,
            date: taskDate,
        }

        await fetch (DOMAIN_NAME + "createTasks", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData),
        }).then(async (res) => {
            console.log(res);
            handleGetTask()
        });
    };

    const handleGetTask = async () => {
        const formData = {
            userid: localStorage.getItem("id"),
        }

        await fetch (DOMAIN_NAME + "getTasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData),
        }).then(async (res) => {
            const taskDataList = await res.json();
            console.log(taskDataList);
            
            setTaskList(taskDataList.taskData)
        })
        ;
    };

    useEffect(() => {
        handleGetTask()
    },[])

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
                        <form className="task-input-form" onSubmit={handleCreateTask}>
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
                        {taskList.map((e: Task) => {
                            return(
                                <Taskcomponent
                                taskName={e.taskname}
                                taskDescription={e.taskdesc}
                                taskDate={e.date}
                                id={e.taskid}
                                handleGetTask={handleGetTask}
                                 />
                            )
                        })}
                        
                    </div>
                    
                    <div className="task-page-right-container">

                    </div>
                </div>

            </div>
        </div>
    )
}