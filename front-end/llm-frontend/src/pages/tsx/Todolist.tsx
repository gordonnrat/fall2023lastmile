import Navbar from "../../components/tsx/Navbar";
import Sidebar from "../../components/tsx/Sidebar";
import '../css/Todolist.css';


export default function Todolist() {
    return(
        <div>
            <Navbar />
            <Sidebar />
            <div className="todolist-page">

                <div className="task-page-container">
                    <div className="task-page-left-container"> 
                        <div className="task-container">
                            {/* <button type="button" className="check-button"></button> */}
                        </div>
                        <div className="task-container"></div>
                        <div className="task-container"></div>
                    </div>
                    
                    <div className="task-page-right-container">

                    </div>
                </div>

            </div>
        </div>
    )
}