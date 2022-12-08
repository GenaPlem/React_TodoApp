import React from "react";
import {connect} from "react-redux";

import { addTodo, changeTodo } from "../../../store/actions";
import { selectEnterTodo } from "../../../store/selector";

import "./styles.scss"

const EnterTodo = ({ enterTodo, changeTodo, addTodo }) => (
    <div className="enter-wrap">
        <input 
        type="text"
        placeholder="Enter new todo"
        value={enterTodo}
        onChange={changeTodo}
        className="enter"
        />
        <button 
        onClick={() => addTodo()}
        className="enter__add"
        >Add new todo</button>
    </div>
)
const mapStateToProps = state => ({
    enterTodo: selectEnterTodo(state),
})

const mapDispatchToProps = {
    addTodo,
    changeTodo,
}

export default connect(mapStateToProps, mapDispatchToProps)(EnterTodo)