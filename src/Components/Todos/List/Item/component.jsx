import React from "react";

import "./styles.scss"

const Item = ({ id, text, onRemoveTodo, onCheckTodo, checked }) => (
    <li className="item">
      <div className="item__value">
        <input
          className="item__check"
          type="checkbox"
          name="checked"
          id={id}
          value={checked}
          onChange={() => onCheckTodo(id)}
        />
        <span className="item__text">{text}</span>
      </div>
      <button onClick={() => onRemoveTodo(id)}>
        x
      </button>
    </li>
  )

export default Item