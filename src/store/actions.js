import { ADD_TODO, REMOVE_TODO, CHECK_TODO, CHANGE_TODO } from "./types";

export const addTodo = (payload) => ({
    type: ADD_TODO,
    payload,
})

export const changeTodo = (payload) => ({
    type: CHANGE_TODO,
    payload,
})

export const removeTodo = (payload) => ({
    type: REMOVE_TODO,
    payload,
})

export const checkTodo = (payload) => ({
    type: CHECK_TODO,
    payload,
})
