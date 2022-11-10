import React from "react";

const EnterTodo = ({ enterTodo, onChangeTodo, onAddTodo }) => (
    <div>
        <input 
        type="text"
        placeholder="Enter new todo"
        value={enterTodo}
        onChange={onChangeTodo}
        />
        <button 
        onClick={onAddTodo}
        >Add new todo</button>
    </div>
)

export default EnterTodo