import React from 'react';
import OtherTodo from '../OtherTodo/OtherTodo';
import './Todo.css'

const Todo = (props) => {
    const todo = props.todo;
    return (
        <div className='todo'>
            {todo.map( (todo) => 
                <OtherTodo key={todo.id} todo={todo.todo} id={todo.id} onRemoveTodo={props.onRemoveTodo}></OtherTodo>
            )}
        </div>
    );
};

export default Todo;