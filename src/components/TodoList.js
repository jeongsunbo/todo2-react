import React from 'react';
import './ListBackground.css';
import './Todolist.css';
const TodoList = ({ todo, onDelete, onToggle }) => {
    return (
        // <div  className={todo.isDone ? 'active' : ''} onClick={()=>{ onToggle(todo.id)}}>
        //     {todo.todotext}
        //     <button onClick={()=> {onDelete(todo.id)}}>X</button>
        // </div>
        <div>
            <span className={todo.isDone ? 'isDone' : ""}
            onClick={()=>onToggle(todo.id)}>
                    {todo.todotext}
            </span>
            <button onClick={()=> {onDelete(todo.id)}}>X</button>
        </div>
    );
};

export default TodoList;