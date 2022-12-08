import React from "react";
import {connect} from "react-redux";

import { selectTodos } from "../../../store/selector";
import Item from "./Item/component";

import "./styles.scss"

const List = ({ todos }) => (
    <ul className="list">
        {todos.map(( todo ) => (
        <Item {...todo} key = {todo.id} />
        ))}
    </ul>
)

const mapStateToProps = state => ({
    todos: selectTodos(state),
})

export default connect(mapStateToProps)(List)