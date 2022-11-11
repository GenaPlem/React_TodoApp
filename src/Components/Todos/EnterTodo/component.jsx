import React from "react";
import "./styles.scss"

const EnterTodo = ({ enterTodo, onChangeTodo, onAddTodo }) => (
    <div className="enter-wrap">
        <input 
        type="text"
        placeholder="Enter new todo"
        value={enterTodo}
        onChange={onChangeTodo}
        className="enter"
        />
        <button 
        onClick={onAddTodo}
        className="enter__add"
        >Add new todo</button>
    </div>
)

export default EnterTodo