import React, {useState} from 'react';
import {SuperInput} from "./SuperInput";
import {SuperButton} from "./SuperButton";
import {TodosType} from "../App";

type TodosPropsType = {
    todos: TodosType[]
    addTask: (title: string) => void
}

export const Todos = (props: TodosPropsType) => {
    const [title, setTitle] = useState<string>('')
    const addTaskHandler = () => {
        props.addTask(title)
        setTitle('')
    }
    return (
        <div>
            <div>
                {/*<input/>*/}
                {/*<button>Add Todos</button>*/}
                <SuperInput setTitle={setTitle} value={title}/>
                <SuperButton name='+' callBack={addTaskHandler}/>
            </div>
            <ul>
                {props.todos.map(t => {
                    return (
                        <li key={t.id}>
                            <input type="checkbox" checked={t.completed}/>
                            <span> {t.id}</span>
                            <span> {t.userId}</span>
                            <span> {t.title}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

