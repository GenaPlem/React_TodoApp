import React from "react";
import TodosComponent from './component'

class Todos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            enterTodo: '',
            todos: [],
        }
    }

    handleChangeTodo = (e) => {
        this.setState({enterTodo: e.target.value});
    }

    handleAddTodo = (e) => {
        const { enterTodo, todos } = this.state;

        const newTodo = {
            id: Math.random().toString(36).substring(2, 15),
            text: enterTodo,
        }
        if (enterTodo.length > 0) {
            this.setState({todos: [...todos, newTodo], enterTodo: ''})
        }
    }

    handleRemoveTodo = (todoId) => {
        const { todos } = this.state;

        const updatedTodo = todos.filter(({id}) => id !== todoId);

        this.setState({todos: updatedTodo})
    }

    isEmptyTodo = () => this.state.todos.length === 0;

    render = () => (
        <TodosComponent
        onChangeTodo={this.handleChangeTodo}
        onAddTodo={this.handleAddTodo}
        onRemoveTodo={this.handleRemoveTodo}
        isEmptyTodo={this.isEmptyTodo()}
        {...this.state}
        />
    )
}

export default Todos; 