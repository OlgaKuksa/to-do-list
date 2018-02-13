export const ADD_TASK = "ADD_TASK";
export const GET_TASKS = "GET_TASKS";
export const UPDATE_TASK = "UPDATE_TASK";
export const REMOVE_TASK = "REMOVE_TASK";

export const addTask = taskProps => ({
  type: ADD_TASK,
  payload: {
    ...taskProps,
    id: Date.now()
  }
});

export const getTasks = payload => ({
  type: GET_TASKS,
  payload
});

export const updateTask = payload => ({
  type: UPDATE_TASK,
  payload
});

export const removeTask = taskid => ({
  type: REMOVE_TASK,
  payload: taskid
});
