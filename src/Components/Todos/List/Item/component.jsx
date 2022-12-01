import React from "react";
import {connect} from "react-redux";

import { removeTodo, checkTodo } from "../../../../store/actions";

import "./styles.scss"

const Item = ( { id, checked, value, removeTodo, checkTodo } ) => (
    <li className="item">
      <div className="item__value">
        <input
          className="item__check"
          type="checkbox"
          name="checked"
          id={id}
          value={checked}
          onChange={() => checkTodo(id)}
        />
        <span className="item__text">{value}</span>
      </div>
      <button onClick={() => removeTodo(id)}>
        x
      </button>
    </li>
  )

const mapDispatchToProps = {
    removeTodo,
    checkTodo,
}

export default connect(null, mapDispatchToProps)(Item)