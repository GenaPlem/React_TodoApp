import React from "react";
import {connect} from "react-redux";

import { selectTodos } from "../../store/selector";
import EnterTodo from "./EnterTodo";
import EmptyList from "./EmptyList";
import List from "./List";

const TodosComponent = ({ todos }) => (
    <div className="todos">
        <h1 className="todos__title">Todos</h1>
        <EnterTodo/>
        {todos.length === 0
        ? <EmptyList />
        : <List/>
        }
    </div>
)

const mapStateToProps = state => ({
    todos: selectTodos(state),
})

export default connect(mapStateToProps)(TodosComponent)