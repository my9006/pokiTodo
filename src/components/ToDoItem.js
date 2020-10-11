import React from 'react'
import ToDoItemFooter from './ToDoItemFooter'
import Pokemon from './Pokemon'


let ToDoItem = props => {

    return (
        <div className="todoItem" >
            <div className="header">
                <span className="todoItemName">{props.task.title}</span>
                <button className="closeButton" onClick={() => props.delete(props.task.id)}>DELETE</button>
            </div>
            <div className="pokemon">
                <img src={props.task.url} height="100px" className="pokemon" />
            </div>
            <div className="todoType">
                {props.task.type}
            </div>
            <ToDoItemFooter task={props.task} statuses={props.statuses} onStatusChange={props.onStatusChange} />
        </div>
    )
};

export default ToDoItem;