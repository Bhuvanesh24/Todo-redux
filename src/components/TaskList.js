
import React from 'react';
import './TaskList.css';
import { useDispatch } from 'react-redux';
import { toggleTask } from '../actions';

const TaskList = ({ tasks, deleteTask }) => {
  const dispatch = useDispatch();

  const handleToggle = (index) => {
    dispatch(toggleTask(index));
  };

  return (
    <div className="task-list-container">
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? 'completed' : ''}>
            <span>{task.task}</span>
            <button onClick={() => handleToggle(index)}>
              {task.completed ? 'Undo' : 'Completed'}
            </button>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
