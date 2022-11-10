import React from "react";

import EnterTodo from "./EnterTodo";
import EmptyList from "./EmptyList";
import List from "./List";

const TodosComponent = ({ enterTodo, onChangeTodo, onAddTodo, todos, onRemoveTodo, isEmptyTodo }) => (
    <div>
        <h1>Todos</h1>
        <EnterTodo 
            enterTodo={enterTodo}
            onChangeTodo={onChangeTodo}
            onAddTodo={onAddTodo}
        />
        {isEmptyTodo 
        ? <EmptyList />
        : <List todos={todos} onRemoveTodo={onRemoveTodo}/>
        }
    </div>
)

export default TodosComponent