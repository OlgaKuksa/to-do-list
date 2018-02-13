import {combineReducers} from 'redux';
import tasks from './tasks';
import filter from './filter'

const toDoApp=combineReducers({tasks, filter});

export default toDoApp;