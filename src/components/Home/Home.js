import React, { useState } from 'react';
import Todo from '../Todo/Todo';
import './Home.css';
import NewTodo from '../../NewTodo/NewTodo';
import uuid from 'react-uuid';

const Home = () => {
    // const dummyTodo = [
    //     { id: 1,
    //       title: "Todo Title 1",
    //       desc: "Todo description 1"
    //     },
    //     { id: 2,
    //       title: "Todo Title 2",
    //       desc: "Todo description 2"
    //     },
    //     { id: 3,
    //       title: "Todo Title 3",
    //       desc: "Todo description 3"
    //     },
    //     { id: 4,
    //       title: "Todo Title 4",
    //       desc: "Todo description 4"
    //     }
    //   ]
    const [todos, setTodos] = useState([]);

    const handleAddTodo = (todo) => {
      setTodos((prevTodo) => {
        return [...prevTodo, {id: uuid(), todo}]
        
      });

    }
    const handleRemove = (id) => {
      setTodos((prevTodo) => {
        const todoFilter = todos.filter((todo) => todo.id !== id);
        return todoFilter;
      });
    }
    return (
        <div className="container">
          <h1>Todo App</h1>
          <NewTodo onAddTodo={handleAddTodo}></NewTodo>
          <Todo todo={todos} onRemoveTodo={handleRemove}></Todo>
        </div>
    );
};

export default Home;