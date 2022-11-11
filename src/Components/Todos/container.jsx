import React from "react";
import TodosComponent from './component';
import "./styles.scss"

class Todos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            enterTodo: '',
            todos: [],
            checked: false,
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
            checked: false,
        }
        if (enterTodo.length > 0) {
            this.setState({todos: [...todos, newTodo], enterTodo: ''});
        }
    }

    handleRemoveTodo = (todoId) => {
        const { todos } = this.state;

        const updatedTodo = todos.filter(({id}) => id !== todoId);

        this.setState({todos: updatedTodo})
    }

    handleCheckTodo = (todoId) => {
        const { todos } = this.state;

        const updatedTodo = todos.map((todo) => {
            if (todo.id === todoId) {
                return {
                    ...todo,
                    checked: !todo.checked,
                }
            } 
            return todo;
        })

        this.setState({todos: updatedTodo})
    }

    isEmptyTodo = () => this.state.todos.length === 0;

    render = () => (
        <TodosComponent
        onChangeTodo={this.handleChangeTodo}
        onAddTodo={this.handleAddTodo}
        onRemoveTodo={this.handleRemoveTodo}
        isEmptyTodo={this.isEmptyTodo()}
        onCheckTodo={this.handleCheckTodo}
        {...this.state}
        />
    )
}

export default Todos; 