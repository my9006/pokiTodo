import React from 'react'
import ToDoItem from './ToDoItem'

let TaskListElement = props => {
    
    return (
        <li>
            <ToDoItem task={props.task} delete={props.delete} statuses={props.statuses} onStatusChange={status=>{
                props.onStatusChange(props.task.id, status)
            }} />
        </li>
    );
}

export default TaskListElement;