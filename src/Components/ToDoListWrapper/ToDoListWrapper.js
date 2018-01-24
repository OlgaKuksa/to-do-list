import React, { Component } from 'react';
import AddTask from '../AddTask';
import Filter from '../Filter';
import Grid from '../Grid'
import { getTasks } from '../../Utils/ApiWrapper'

export default class ToDoListWrapper extends Component {
    state = {
        tasks: []
    }

    componentWillMount(){
        getTasks().then((tasks)=>this.setState({tasks}))
    }

    addTask=(taskData)=>{
        console.log(taskData)
    }

    render() {
        return (<div>
            <AddTask legend="Add task" name='TaskForm' onSubmit={this.addTask} />
            <Filter legend="Filter" />
            <Grid legend='Tasks' tasks={this.state.tasks} />
        </div>
        )
    }
}

