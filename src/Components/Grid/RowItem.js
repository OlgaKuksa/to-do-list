import React, { Component } from 'react';

export default class RowItem extends Component {
    render() {
        const{task, removeTask}=this.props;
        return (
            <tr>
                <td><input type='checkbox'  checked={task.isDone}/></td>
                <td>{task.title}</td>
                <td>{task.priority}</td>
                <td>{task.date}</td>
                <td><button onClick={()=>removeTask(task.id)}>X</button></td>
            </tr>
        )
    }
}