import React from "react";

const Item = ({ id, text, onRemoveTodo }) => (   
    <li key={id}>
        {text}
        <button onClick={() => onRemoveTodo(id)}>x</button>
    </li>
)

export default Item