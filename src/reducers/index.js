import {combineReducers} from 'redux';
import tasks from './tasks';
import filter from './filter';
import editedTask from './editedTask'

const toDoApp=combineReducers({tasks, filter, editedTask});

export default toDoApp;