import React, { useState, useEffect } from "react"
import TasksList from "./TasksList";

let TaskListColumn = props => {
    const [tasksList, setTasksList] = useState(props.tasks);
    useEffect(() => {
        setTasksList(props.tasks);
    }, [props.tasks])

    return (
        <div className="statusAndColumn">
            <p className="status">{props.tasks.status}</p>
            <div className="column">
                <TasksList tasks={props.tasks} deleteHandler={props.deleteHandler} statuses={props.statuses} onStatusChange = {props.onStatusChange}/>
            </div>
        </div>
    );
};

export default TaskListColumn;