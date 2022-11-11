import React from "react";

import Item from "./Item/component";

import "./styles.scss"

const List = ({ todos, onRemoveTodo, onCheckTodo, checked }) => (
    <ul className="list">
        {todos.map(({id, text}) => (
        <Item 
        key={id} 
        id={id}
        text={text} 
        checked={checked}
        onRemoveTodo={onRemoveTodo}
        onCheckTodo={onCheckTodo}
        />
        ))}
    </ul>
)

export default List