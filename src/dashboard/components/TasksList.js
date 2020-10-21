import React from 'react'
import TaskListElement from './TaskListElement'

let TasksList = props => {
    return (
        <ul className="ul">
            {props.tasks.map(task => <TaskListElement key = {task.id} task={task} deleteHandler={props.deleteHandler} statuses={props.statuses} onStatusChange = {props.onStatusChange}/>)}
        </ul>
    )
}

export default TasksList;