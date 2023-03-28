import { useState } from 'react';
import './App.css';
import AddingTodos from './AddingTodos';
import TodoList from './TodoList';

function App() {
  const [list, setList] = useState([]);
  const [filter, setFilter] = useState("all");
  const [todo, setTodo] = useState("");

  const handleChange = (event) => {
    setTodo(event.target.value);
  }

  const handleAddTodo = () => {
    const newTodo = {
      todo: todo,
      isCompleted: false,
    };
    setList([...list, newTodo]);
    setTodo("");
  };

  const handleDelete = (index) => {
    list.splice(index, 1);
    setList([...list]);
  };

  const handleCheck = (index, event) => {
    const updatedList = [...list];
    updatedList[index].isCompleted = !updatedList[index].isCompleted;
    setList(updatedList);
  };

  const filterList = () => {
    switch (filter) {
      case "done":
        return list.filter((item) => item.isCompleted === true);
      case "todo":
        return list.filter((item) => item.isCompleted === false);
      default:
        return list;
    }
  };

  const handleDeleteAllTasks = () => {
    const deletedList = []
    setList(deletedList)
  }

  const handleDeleteDoneTasks = () => {
    const deletedDoneList = list.filter((item) => item.isCompleted === false);
    setList(deletedDoneList)
  }


  return (
    <div className="App">
      <AddingTodos 
        handleChange={handleChange}
        handleAddTodo={handleAddTodo}
      />
      <TodoList 
        list={filterList()}
        setFilter={setFilter}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        handleDeleteDoneTasks={handleDeleteDoneTasks}
        handleDeleteAllTasks={handleDeleteAllTasks}
      />
      
    </div>
  );
}

export default App;
