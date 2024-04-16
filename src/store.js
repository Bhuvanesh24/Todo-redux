// src/store.js
import { createStore } from 'redux';
import tasksReducer from './reducers/tasksReducer';

// Load tasks from local storage
const persistedState = localStorage.getItem('tasks')
  ? JSON.parse(localStorage.getItem('tasks'))
  : { tasks: [] }; // Initialize with an empty array if no tasks are found

const store = createStore(
  tasksReducer,
  persistedState
);

// Subscribe to store changes and save tasks to local storage
store.subscribe(() => {
  localStorage.setItem('tasks', JSON.stringify(store.getState()));
});

export default store;
