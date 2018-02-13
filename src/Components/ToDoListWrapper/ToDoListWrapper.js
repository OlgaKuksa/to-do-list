import React, { Component } from "react";
import AddTask from "../AddTask";
import Filter from "../Filter";
import Grid from "../Grid";
import {
  getTasks,
  addTask,
  removeTask,
  updateTask
} from "../../Utils/ApiWrapper";
import {connect} from 'react-redux';
import {addTask as addTaskAction, getTasks as getTasksAction, updateTask as updateTaskAction, removeTask as removeTaskAction }
from '../../actions/tasks';
import {onFilterUpdate as onFilterUpdateAction} from '../../actions/filter';

class ToDoListWrapper extends Component {
  state = {
    tasks: [],
    filter: {
      showCompleted: true
    }
  };

  componentWillMount() {
    getTasks().then(tasks => this.props.getTasksAction(tasks));
  }

  addTask = taskData => {
    addTask(taskData).then(taskData =>
      this.props.addTaskAction({taskData})
    );
  };

  removeTask = id => {
    removeTask(id).then(()=>this.props.removeTaskAction(id));
  };

  updateTask = (id, changes) => {
    updateTask(id, changes).then((updatedTask)=>updateTaskAction(updatedTask))
  };

  onFilterUpdate = changes => {
    this.setState({
      filter: {
        ...this.state.filter,
        ...changes
      }
    });
  };

  render() {
    const { tasks, filter, filter: { showCompleted } } = this.props;

    let filteredTasks = showCompleted
      ? tasks
      : tasks.filter(item => !item.isDone);
    filteredTasks = filter.dateFrom
      ? filteredTasks.filter(item => item.date >= filter.dateFrom)
      : filteredTasks;
      filteredTasks=filter.dateTo
        ? filteredTasks.filter(item => item.date <= filter.dateTo)
        : filteredTasks;
    filteredTasks = filter.text
      ? filteredTasks.filter(
          item =>
            item.title.includes(filter.text) ||
            item.description.includes(filter.text)
        )
      : filteredTasks;
     
    return (
      <div>
        <AddTask legend="Add task" name="TaskForm" onSubmit={this.addTask} />
        <Filter
          legend="Filter"
          filter={filter}
          onFilterUpdate={this.onFilterUpdate}
        />
        <Grid
          legend="Tasks"
          tasks={filteredTasks}
          removeTask={this.removeTask}
          updateTask={this.updateTask}
        />
      </div>
    );
  }
};


const mapStateToProps=(state)=>({
  tasks:state.tasks,
  filter:state.filter}
);

const mapDispatchToProps={
  addTaskAction,
  getTasksAction,
  updateTaskAction,
  removeTaskAction,
  onFilterUpdateAction
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoListWrapper);