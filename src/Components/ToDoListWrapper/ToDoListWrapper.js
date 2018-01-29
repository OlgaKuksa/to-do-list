import React, { Component } from 'react';
import AddTask from '../AddTask';
import Filter from '../Filter';
import Grid from '../Grid'
import {getTasks, addTask, removeTask, updateTask} from '../../Utils/ApiWrapper'

export default class ToDoListWrapper extends Component {
    state = {
        tasks: []
    }

    componentWillMount(){
        getTasks().then((tasks)=>this.setState({tasks}))
    }

    addTask=(taskData)=>{
        addTask(taskData).then((taskData)=>this.setState(
            {tasks:[...this.state.tasks, taskData]}
        ))
    }

    removeTask=(id)=>{
        let tasks=this.state.tasks;
        this.setState(
            {
                tasks:this.state.tasks.filter(item=>item.id!==id)
            });
        removeTask(id).catch(()=>this.setState({tasks}))
    }

    updateTask=(id, changes)=>{
        updateTask(id,changes).then((updatedItem)=>this.setState(
            {
                tasks:this.state.tasks.map(item=>item.id!==id?item:{
                    ...item,
                    ...updatedItem
                })
            }
        ))
    }

    render() {
        return (<div>
            <AddTask legend="Add task" name='TaskForm' onSubmit={this.addTask}/>
            <Filter legend="Filter" />
            <Grid legend='Tasks' tasks={this.state.tasks} removeTask={this.removeTask} updateTask={this.updateTask}/>
        </div>
        )
    }
}

