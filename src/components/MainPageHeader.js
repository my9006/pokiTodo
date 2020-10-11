import React, { useState, useEffect, useCallback } from 'react'
import Columns from './Columns';
import NewTaskLightbox from './NewTaskLightbox';
import getPok from "./helper/PokemonGetter"

const statuses = ["NEW", "IN_PROGRESS", "DONE"];

let getTasks = () => {
    return fetch("http://localhost:666/tasks", { method: "GET" })
        .then(response => response.json())
        .then(responseJson => {
            let tasks = responseJson.map(task => {
                return {
                    id: task.id,
                    title: task.title,
                    status: task.status,
                    type: task.type,
                    date: task.date,
                    url: task.url,
                }
            })
            return tasks;
        });
}

let MainPageHeader = () => {

    const [isDisplayed, setDisplayed] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("selectAll");

    let newTaskOnClick = () => {
        setDisplayed(true);
    }

    let cancelClick = () => {
        setDisplayed(false);
    }

    const createTask = async ({ date, title, filter }) => {
        let url;
        await getPok().then(res => url = res);
        await fetch('http://localhost:666/task', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "date": date,
                "status": "NEW",
                "title": title,
                "type": filter.toUpperCase(),
                "url": url
            }),
        })
          await getTasks().then(setTasks);
          setDisplayed(false);
    }

    let deleteHandler = id => {
        debugger;
        setTasks(tasks.filter(task => task.id !== id))
    }

    useEffect(() => {
        getTasks().then(setTasks);
    }, [])

    let onStatusChange = async (id, status) => {
        let taskToUpdate = {}
        setTasks(oldTasks => oldTasks.map(task => {
            if (task.id === id) {
                taskToUpdate = task
                return {
                    ...task,
                    status,
                }
            }
            return task;
        }))
        debugger;
        await fetch("http://localhost:666/task/" + id, {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "date": taskToUpdate.date,
                "status": status,
                "title": taskToUpdate.title,
                "type": taskToUpdate.type.toUpperCase(),
                "url": taskToUpdate.url
            }),
        }).then(res => { debugger }).catch((er) => console.log("Bobo happeniing"))
    }

    let onSearchChange = useCallback(event => setSearch(event.target.value), []);
    let onFilterChange = useCallback(event => setFilter(event.target.value), []);

    useEffect(() => {
        (async () => {
            const tasks = await getTasks();
            let filteredTasks = tasks.filter(task => {
                let isSearched = task.title === null || task.title.includes(search);
                let isFiltered = (task.type.toUpperCase() === filter.toUpperCase() || filter.includes("All"));
                return isSearched && isFiltered;
            });
            console.log("Filter function")
            setTasks(filteredTasks);
        })();
    }, [filter, search])

    return (
        <>
            <div>
                {isDisplayed && <NewTaskLightbox onCancelClick={cancelClick} onSaveClick={createTask} />}
                <div className="mainPageHeader" style={{ zIndex: 1, opacity: isDisplayed ? 0.2 : 1, pointerEvents: isDisplayed ? "none" : "all" }}>
                    <input type="search" placeholder="Search:" onChange={onSearchChange} id="search" value={search} />
                    <select name="taskTypes" id="headerFilter" onChange={onFilterChange} value={filter}>
                        <option value="selectAll">--All--</option>
                        <option value="Home">Home</option>
                        <option value="Work">Work</option>
                        <option value="Planetary">Planetary</option>
                        <option value="Eternal">Eternal</option>
                    </select>

                    <button className="newButton" onClick={newTaskOnClick}>NEW</button>
                    <Columns tasks={tasks} deleteHandler={deleteHandler} statuses={statuses} onStatusChange={onStatusChange} />

                </div>
            </div>

        </>
    );
};

export default MainPageHeader;