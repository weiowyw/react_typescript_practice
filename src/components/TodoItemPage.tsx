import React, {FC, useEffect, useState} from 'react';
import {ITodo} from "../types";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";

type TodoItemPageParams = {
    id: string;
}

const TodoItemPage:FC = () => {

    const [todo, setTodo] = useState<ITodo | null>(null);
    const params = useParams<TodoItemPageParams>();
    const navigate = useNavigate();


    useEffect(() => {
        fetchTodo();
    }, []);

    const fetchTodo = async() => {
        const res = await axios.get<ITodo>('https://jsonplaceholder.typicode.com/todos/' + params.id);
        setTodo(res.data)
    }


    return (
        <div>
            <button onClick={() => navigate('/todos')}>back</button>
            <h1>{todo?.title}</h1>
            <div>
                {todo?.id}
            </div>

        </div>
    );
};

export default TodoItemPage;