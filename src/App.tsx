import React, {useEffect, useState} from 'react';
import './App.css';
import {Todos} from "./components/Todos";

export type TodosType = {
    completed: boolean
    id: number
    title: string
    userId: number
}

function App() {

    const [todos, setTodos] = useState<TodosType[]>([])
    // const [title, setTitle] = useState<string>('')
    console.log(todos)


    const fetchRequest = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setTodos(json))
    }

    useEffect(() => {
        fetchRequest()
    }, [])

    const showTodosHandler = () => {
        fetchRequest()
    }

    const hideTodosHandler = () => {
        setTodos([])
    }

    const addTask = (title:string) => {
        const newTodos: TodosType = {
            completed: false,
            id: todos.length + 1,
            title,
            userId: new Date().getTime()
        }
        setTodos([newTodos, ...todos])
    }
    return (
        <div className="App">
            <button onClick={showTodosHandler}>Show me Todos</button>
            <button onClick={hideTodosHandler}>Hide Todos</button>
            <Todos todos={todos} addTask={addTask}/>
            {/*<div>*/}
            {/*    /!*<input/>*!/*/}
            {/*    /!*<button>Add Todos</button>*!/*/}
            {/*    <SuperInput setTitle={setTitle} value={title}/>*/}
            {/*    <SuperButton name='+' callBack={addTaskHandler}/>*/}
            {/*</div>*/}
            {/*<ul>*/}
            {/*    {todos.map(t => {*/}
            {/*        return (*/}
            {/*            <li key={t.id}>*/}
            {/*                <input type="checkbox" checked={t.completed}/>*/}
            {/*                <span> {t.id}</span>*/}
            {/*                <span> {t.userId}</span>*/}
            {/*                <span> {t.title}</span>*/}
            {/*            </li>*/}
            {/*        )*/}
            {/*    })}*/}
            {/*</ul>*/}
        </div>
    );
}

export default App;
