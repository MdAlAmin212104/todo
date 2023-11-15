import React, { useState } from 'react';
import './NewTodo.css';


const NewTodo = (props) => {
    const [todo, setTodo] = useState({title: '', desc: ''});
    //const { title, desc } = todo;
    const handleChange = (event) => {
        const name = event.target.name;
        setTodo((oldTodo) =>{
           return {...oldTodo, [name]:event.target.value}
        }); 
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        props.onAddTodo(todo);
        setTodo({title: "", desc: "",});
    }; 
    
    return (
        <form className='form' onSubmit={handleSubmit}>
            <div className='form-field'>
                <label htmlFor='title'>Title :</label>
                <input type="text" id='title' name='title' onChange={handleChange}/>
            </div>
            <div className='form-field'>
                <label htmlFor='desc'>Description :</label>
                <textarea name="desc" id="desc" onChange={handleChange}></textarea>
            </div>
            <div>
                <button className='btn'>Add Todo</button>
            </div>
        </form>
    );
};

export default NewTodo;