type HandleGetTask = () => void;
export default function Taskcomponent({taskName, taskDescription, taskDate, id, handleGetTask}: {taskName:string, taskDescription:string, taskDate:string, id:number, handleGetTask:HandleGetTask}){
    const DOMAIN_NAME = "http://localhost:4000/";

    const handleDelete = async (e: React.FormEvent) => {
        e.preventDefault();
        const formData = {
            taskid: id,
        }
        await fetch (DOMAIN_NAME + "deleteTasks", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData),
        });
        handleGetTask()
    }
    
    
    return (
        <div className="task-container">
        <button type="button" className="check-button" onClick={handleDelete}></button>
        <div className="task-information">
            <h1 className="task-info-name">{taskName}</h1>
            <p className="task-info-desc">{taskDescription}</p>
            <p className="task-info-date">{taskDate}</p>
        </div>
    </div>
    )
}