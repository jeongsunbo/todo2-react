import React from 'react';
import TodoList from './TodoList';
import './ListBackground.css';

const TodoLists = ({ todos, onDelete, onToggle }) => {
    // console.log(todos);
    // props 객체안에 배열임
    // {todos}를 배열로 받아옴
    return (
        <div>
            {todos.map(todo =><TodoList todo={todo} key={todo.id} onDelete={onDelete} onToggle={onToggle}/>)}
            {/*밑에랑 같음 
            <div>{todos[0].list}</div>
            <div>{todos[1].list}</div>
            <div>{todos[2].list}</div> */}
        </div>
    );
};

export default TodoLists;