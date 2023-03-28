import React from 'react';
import CrudIcons from './CrudIcons';

const TodoList = ({ list, handleCheck, handleEdit, handleDelete, setFilter, handleDeleteDoneTasks, handleDeleteAllTasks }) => {
  return (
    <div className="todo-list">
      <div>
        <button className='btn btn-primary' onClick={() => setFilter("all")}> All </button>{' '}
        <button className='btn btn-primary' onClick={() => setFilter("done")}> Done </button>{' '}
        <button className='btn btn-primary' onClick={() => setFilter("todo")}> Todo </button>
      </div>
      {list.map((item, index) => {
        return (
          <div key={index}>
            <div>
              <p style={{ textDecoration: item.isCompleted ? 'line-through' : 'none' }}>
                {item.todo}{' '}
                <CrudIcons
                  index={index}
                  isCompleted={item.isCompleted}
                  handleCheck={handleCheck}
                  handleEdit={handleEdit}
                  handleDelete={handleDelete}
                />
              </p>
            </div>
          </div>
        );
      })}
      <div>
        <button className='btn btn-danger' onClick={handleDeleteDoneTasks}> Delete Done Tasks</button>
        <button className='btn btn-danger' onClick={handleDeleteAllTasks}> Delete All Tasks </button>
      </div>
    </div>
  );
};

export default TodoList;
