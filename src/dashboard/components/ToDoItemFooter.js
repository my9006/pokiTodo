import React, { useState } from 'react'

let ToDoItemFooter = props => {
    const [status, setStatus] = useState(props.task.status);
    let formatDate = miliseconds=>new Date(miliseconds).toLocaleDateString("en-GB");
    return (
        <div className="todoItemFooter">
            <div className="todoItemStatus">
                <select className="selectStatus" id={'status-' + props.task.id} value={props.task.status} onChange={e => props.onStatusChange(e.target.value)}>
                    {props.statuses.map(status => <option key={status} value={status}>{status}</option>)}
                </select>
            </div>
            <div className="todoItemDueDate">
                <span>{formatDate(props.task.date)}</span>
            </div>
        </div>
    );
};

export default ToDoItemFooter;