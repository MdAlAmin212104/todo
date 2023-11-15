import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import  './OtherTodo.css';

const OtherTodo = (props) => {
    const { title, desc } = props.todo;
    const { id } = props;
    const handleClick = (id) =>{
        props.onRemoveTodo(id);
    }
    

    return (
        <article className='OtherTodo'>
            <div>
            <h3 className='title'>{title}</h3>
            <p>{desc}</p>
            </div>
            <div>
                <button className='button' onClick={() => {handleClick(id)}}><FontAwesomeIcon icon={faTrash} /></button>
            </div>
        </article>
    );
};

export default OtherTodo;