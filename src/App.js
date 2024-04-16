
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { addTask, deleteTask } from './actions';
import './App.css';
const App = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleAddTask = (task) => {
    dispatch(addTask(task));
  };

  const handleDeleteTask = (index) => {
    dispatch(deleteTask(index));
  };

  return (
    <div>
      <h1 className='head'>To-Do List</h1>
      <TaskInput addTask={handleAddTask} />
      <TaskList tasks={tasks} deleteTask={handleDeleteTask} />
    </div>
  );
};

export default App;
