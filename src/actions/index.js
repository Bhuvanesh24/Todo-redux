
export const addTask = (task) => {
  return {
    type: 'ADD_TASK',
    payload: {
      task,
      completed: false, 
    },
  };
};

export const deleteTask = (index) => {
  return {
    type: 'DELETE_TASK',
    payload: index,
  };
};

export const toggleTask = (index) => {
  return {
    type: 'TOGGLE_TASK',
    payload: index,
  };
};
