import React, {FC} from 'react';
import {ITodo} from "../types";

interface TodoProps {
    todo: ITodo;
}

const TodoItem:FC<TodoProps> = ({todo}) => {
    return (
        <div style={{padding: 15, border: '1px solid black'}}>
            <input type='checkbox' checked={todo.completed}/>
            {todo.id}. {todo.title}
        </div>
    );
};

export default TodoItem;