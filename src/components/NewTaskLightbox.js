import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

let NewTaskLightbox = props => {
    const [date, setDate] = useState(new Date());
    const [title, setTitle] = useState("");
    const [filter, setFilter] = useState("none");

    return (
        <div className='newTaskLightbox'>
            <input id='newTaskName' onChange={event => setTitle(event.target.value)} className='newTaskName' ></input>
            <div>
                <select id="filter" name="filters" onChange={event => setFilter(event.target.value)} value={filter}>
                    <option value="none" disabled hidden>
                        Select an Option
                    </option>
                    <option value="Home">Home</option>
                    <option value="Work">Work</option>
                    <option value="Planetary">Planetary</option>
                    <option value="Eternal">Eternal</option>
                </select>
            </div>
            <div>
                <DatePicker selected={date} onChange={date => setDate(date)} id="date" />
            </div>
            <button className='saveButton' onClick={() => props.onSaveClick({date, title, filter})}>Save</button>
            <button className='cancelButton' onClick={props.onCancelClick}>Cancel</button>
        </div>
    );
}

export default NewTaskLightbox;