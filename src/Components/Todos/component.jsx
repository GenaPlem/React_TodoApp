import React from "react";

import EnterTodo from "./EnterTodo";
import EmptyList from "./EmptyList";
import List from "./List";

const TodosComponent = ({ enterTodo, onChangeTodo, onAddTodo, todos, onRemoveTodo, isEmptyTodo, onCheckTodo, checked }) => (
    <div className="todos">
        <h1 className="todos__title">Todos</h1>
        <EnterTodo 
            enterTodo={enterTodo}
            onChangeTodo={onChangeTodo}
            onAddTodo={onAddTodo}
        />
        {isEmptyTodo 
        ? <EmptyList />
        : <List 
        todos={todos}
        checked={checked}
        onRemoveTodo={onRemoveTodo} 
        onCheckTodo={onCheckTodo}
        />
        }
    </div>
)

export default TodosComponent