import React from 'react';
import logo from './logo.svg';
import './App.css';
import {SuperButton} from "./components/SuperButton";
import {SuperTodolist} from "./components/SuperTodolist";

function App() {

    const tasks = [
        {id: 1, title: 'CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'REACT', isDone: false}
    ]
    return (
        <div className="App">
            <SuperButton callBack={() => {
            }} color={'red'}>RED SUPER BUTTON</SuperButton>
            <SuperButton callBack={() => {
            }}>DEFAULT SUPER BUTTON</SuperButton>
            <SuperButton callBack={() => {
            }} color={'secondary'} disabled>RED SUPER BUTTON</SuperButton>
            <div>----------------------</div>
            <SuperTodolist tasks={tasks}>
                    <SuperButton callBack={() => {
                    }} color={'red'}>RED SUPER BUTTON</SuperButton>
                    <SuperButton callBack={() => {
                    }}>DEFAULT SUPER BUTTON</SuperButton>
                    <SuperButton callBack={() => {
                    }} color={'secondary'} disabled>RED SUPER BUTTON</SuperButton>
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
            </SuperTodolist>
            <div>----------------------</div>
            <SuperTodolist tasks={tasks}>
                <div>some text</div>
                <div>some text</div>
                <div>some text</div>
                <div>some text</div>
                <div>some text</div>
                <div>some text</div>
                <div>some text</div>
            </SuperTodolist>
            <div>----------------------</div>
            <SuperTodolist tasks={tasks}>
                    <div>some text</div>
                    <div>some text</div>
                    <div>some text</div>
                    <SuperButton callBack={() => {
                    }} color={'red'}>RED SUPER BUTTON</SuperButton>
                    <SuperButton callBack={() => {
                    }}>DEFAULT SUPER BUTTON</SuperButton>
                    <SuperButton callBack={() => {
                    }} color={'secondary'} disabled>RED SUPER BUTTON</SuperButton>
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
                    <div>some text</div>
                    <div>some text</div>
                    <div>some text</div>
            </SuperTodolist>
        </div>

    );
}

export default App;
