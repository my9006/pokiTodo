import React from 'react'
import TaskListElement from './TaskListElement'

let TasksList = props => {
    return (
        <ul className="ul">
            {props.tasks.map(task => <TaskListElement key = {task.id} task={task} delete={props.delete} statuses={props.statuses} onStatusChange = {props.onStatusChange}/>)}
        </ul>
    )
}

export default TasksList;