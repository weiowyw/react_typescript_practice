import React, {FC, useEffect, useState} from 'react';
import {ITodo} from "../types";
import axios from "axios";
import TodoItem from "./TodoItem";
import List from "./List";

const TodosPage:FC = () => {

    const [todos, setTodos] = useState<ITodo[]>([])
    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async() => {
        const res = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10');
        setTodos(res.data)
    }

    return (
        <List items={todos} renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}/>
    );
};

export default TodosPage;