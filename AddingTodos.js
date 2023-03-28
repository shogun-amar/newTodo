import React from 'react';

function AddingTodos({handleChange, handleAddTodo, todo }) {
  

  return (
    <div>
      <h1> TodoInput </h1>
      <div>
        <input type="text" value={todo} onChange={handleChange} />
      </div>
      {' '}
      <div className='d-grid gap-2'>
        <button className='btn btn-danger' onClick={handleAddTodo}>
          Add New Task
        </button>
      </div>
    </div>
  );
}

export default AddingTodos;
