import { ADD_TODO, CHANGE_TODO, CHECK_TODO, REMOVE_TODO } from "./types";

const initialState = {
    enterTodo: '',
    todos: [],
}

const counter = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_TODO:
            return {
                ...state,
                enterTodo: action.payload.target.value,
            }
        case ADD_TODO:
            if (state.enterTodo.length > 0) {
                const newTodo = {
                    id: Math.random().toString(36).substring(2, 15),
                    value: state.enterTodo,
                    checked: false,
                }
                return {
                    ...state,
                    todos: [...state.todos, newTodo],
                    enterTodo: '',
                }
            }
            return {
                ...state
            }
        case REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }
        case CHECK_TODO:
            return {
                ...state,
                todos: state.todos.map((todo) => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        checked: !todo.checked,
                    }
                }
                return todo;
            })
    }
        default:
            return state
    }
}

export default counter;