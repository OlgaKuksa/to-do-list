import {
  ADD_TASK,
  GET_TASKS,
  UPDATE_TASK,
  REMOVE_TASK
} from "../actions/tasks";
const DEFAULT_STATE = [];

const tasks = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload];
    case GET_TASKS:
      return action.payload || DEFAULT_STATE;
    case UPDATE_TASK:
      return state.map(
        task =>
          task.id !== action.payload.id
            ? task
            : {
                ...task,
                ...action.payload
              }
      );
    case REMOVE_TASK:
      return state.filter(task => task.id != action.payload);
    default:
      return state;
  }
};

export default tasks;
