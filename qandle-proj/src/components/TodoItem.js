import React from 'react'
import './todoitem.css'
const TodoItem = ({todo}) => {
  return (
    <div className='container'>
        <div className='item'>
        <h4>userid</h4>
        <h3>{todo.userId}</h3>
        </div>
        <div className='item'>
        <h4>id</h4>
        <h3>{todo.id}</h3>
        </div>
        <div className='item'>
        <h4>title</h4>
        <h3>{todo.title}</h3>
        </div>
        <div className='item'>
        <h4>completed</h4>
        <h3>{todo.completed ? 'Yes':'No'}</h3>
        {/* <input type='checkbox' checked={todo.completed} /> */}
        </div>
      
    </div>
  )
}

export default TodoItem