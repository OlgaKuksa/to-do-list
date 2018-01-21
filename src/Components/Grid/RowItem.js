import React, { Component } from 'react';

export default class RowItem extends Component {
    render() {
        return (
            <tr>
                <td><input type='checkbox'  checked={this.props.task.isDone}/></td>
                <td>{this.props.task.title}</td>
                <td>{this.props.task.priority}</td>
                <td>{this.props.task.date}</td>
            </tr>
        )
    }
}