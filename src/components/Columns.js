import React, { useState, useEffect } from 'react'
import TaskListColumn from './TaskListColumn';

let Columns = props => {
    return (<div className="columns">
        
        <TaskListColumn tasks={props.tasks.filter(t => t.status === 'NEW')} delete={props.deleteHandler} statuses={props.statuses} onStatusChange={props.onStatusChange} />
        <TaskListColumn tasks={props.tasks.filter(t => t.status === 'IN_PROGRESS')} delete={props.deleteHandler} statuses={props.statuses} onStatusChange={props.onStatusChange} />
        <TaskListColumn tasks={props.tasks.filter(t => t.status === 'DONE')} delete={props.deleteHandler} statuses={props.statuses} onStatusChange={props.onStatusChange} />
    </div>);
};

export default Columns;